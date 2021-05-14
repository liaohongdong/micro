/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 16:59:25
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 14:48:51
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-http/src/utils/axios.js
 * @description axios通信类封装
 */

import axios from "axios"; // 导入axios库
import { isObject, isArray } from "@fe-micro/micro-util"
import { _httpOptions } from "../config/settings"; // 导入配置项
import { HttpCode, StatusCode } from "../config/HttpCode";
import NProgress from 'nprogress';

/**
 * @method 配置请求拦截器
 * @param {Object} instance axios实例
 * @param {Function} reqInterceptSuccess 非必填 请求拦截器成功回调，必须返回一个config对象
 */
const _configRequestInterceptor = (instance, reqInterceptSuccess) => {
  instance.interceptors.request.use(config => {
    if (reqInterceptSuccess) {
      const _config = reqInterceptSuccess(config);
      if (!isObject(_config)) {
        throw Error('reqInterceptSuccess必须返回一个config对象.')
      }
      return _config;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  })
}

/**
 * @method 配置响应拦截器
 * @param {Object} instance axios实例
 * @param {Function} respInterceptSuccess 非必填 响应拦截器成功回调，必须返回一个response对象
 * @param {Function} respInterceptError 非必填 响应拦截器失败回调，必须返回一个response对象
 * @param {Number} retry 非必填 请求失败自动重试次数 默认2
 * @param {Number} retryDelay 非必填 请求失败自动重试时间间隔 默认1000ms
 */
const _configResponseInterceptor = (instance, respInterceptSuccess, respInterceptError, retry, retryDelay) => {
  // 自动重试机制
  instance.defaults.retry = retry;
  instance.defaults.retryDelay = retryDelay;
  // 响应拦截器
  instance.interceptors.response.use(
    res => {
      if (respInterceptSuccess) {
        const _res = respInterceptSuccess(res);
        return _res;
      }
      return res;
    },
    err => {
      NProgress.done();
      let config = err.config;
      let errres = err.response;
      let err_type = errres?.status ?? 0;
      // 处理状态码
      err.message = ErrorCodeHandler(err_type);
      // 收集错误信息
      if (!err.message) {
        switch (err_type) {
          case 404:
            err.message = `请求地址出错: ${errres?.config?.url ?? '/'}`;
            break;
          default:
            err.message = "未知异常，请重试";
        }
      }
      if (axios.isCancel(err)) {
        err.message = "请求已取消，请重试";
      }
      // If config does not exist or the retry option is not set, reject
      if (!config || !config.retry) return Promise.reject(err);
      // Set the variable for keeping track of the retry count
      config.__retryCount = config.__retryCount || 0;
      // Check if we've maxed out the total number of retries
      if (config.__retryCount >= config.retry) {
        // 自定义重复请求后失败的回调
        if (respInterceptError) {
          const _res = respInterceptError(err);
          if (!isObject(err?.config)) {
            throw Error('respInterceptError必须返回一个err包含{config,response}')
          }
          return Promise.reject(_res);
        }
        // Reject with the error
        return Promise.reject(err);
      }

      // Increase the retry count
      config.__retryCount += 1;

      // Create new promise to handle exponential backoff
      let backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, config.retryDelay || 1);
      });

      // Return the promise in which recalls axios to retry the request
      return backoff.then(() => {
        if (config.baseURL) {
          config.url = config.url.replace(config.baseURL, "");
        }
        return instance(config);
      });
    }
  );
}

/**
 * @param {Number} error 错误码
 */
const ErrorCodeHandler = (error) => {
  return StatusCode[HttpCode[`e${error}`]]
}

export default class Axios {
  constructor() {
    this.httpInstance = null;
  }

  /**
   * @method 创建axios实例
   * @param {Object} param0 配置项
   * @description retry:Number 请求失败自动重连次数 默认2
   * @description retryDelay:Number 请求失败自动重连时间间隔 默认1000ms
   * @description withCredentials:Boolean 开启请求跨域 默认true
   * @description headers:Object 请求头配置 默认"Content-Type": "application/json;charset=UTF-8"
   * @description timeout:Number 请求超时时间 默认5000
   * @description baseURL:String 请求地址前缀 默认''
   * @description successCode:Number //废弃 后台请求成功状态码，默认200 将会把所有非200的请求回调归入reject
   * @description expand:Object 其他需要扩展的配置项 other
   * @param {Function} reqInterceptSuccess 非必填 请求拦截器成功回调，必须返回一个config对象
   * @param {Function} respInterceptSuccess 非必填 响应拦截器成功回调，必须返回一个response对象
   * @param {Function} respInterceptError 非必填 响应拦截器失败回调，必须返回一个response对象
   * @returns 返回创建后的axios实例
   */
  static create({
    retry = _httpOptions.retry,
    retryDelay = _httpOptions.retryDelay,
    withCredentials = _httpOptions.withCredentials,
    headers = _httpOptions.headers,
    timeout = _httpOptions.timeout,
    baseURL = _httpOptions.baseURL,
    // successCode,
    ...expand
  } = {}, reqInterceptSuccess, respInterceptSuccess, respInterceptError) {
    // 处理类内部successCode
    // this._successCode = successCode ?? _httpCode.ok;
    // 整理配置项
    const _options = {
      baseURL,
      withCredentials,
      headers,
      timeout,
      ...expand
    }
    // 创建axios实例
    const _http = axios.create(_options);
    // 注册请求拦截器
    _configRequestInterceptor(_http, reqInterceptSuccess);
    // 注册响应拦截器
    _configResponseInterceptor(_http, respInterceptSuccess, respInterceptError, retry, retryDelay);
    this.httpInstance = _http;
    return _http;
  }

  /**
   * 通过向 axios 传递相关配置来创建单个请求
   * @param {Object} param0
   * @description url:String 请求地址
   * @description method:String 请求方法类型 默认post
   * @description params:Object 即将与请求一起发送的 URL 参数
   * @description data:Object 作为请求主体被发送的数据
   * @description instance:Object 外部传入的axios实例，默认使用内部创建，无特殊需求不得在外部创建多余实例
   * @description expand:Object 扩展对象，其他不常用的axios(options)配置项放在expand字段传入，key值和axios文档一致
   */
  static axios({
    url,
    method = _httpOptions.method,
    params,
    data,
    instance,
    ...expand
  } = {}) {
    // 废弃 返回一个新的promise，注意：此promise将把http错误和与create axios时
    // 整理请求参数
    const _options = {
      url,
      method,
      params,
      data,
      ...expand
    }
    // 处理请求并直接返回_http()
    const _http = instance ? instance() : this.httpInstance;
    return _http(_options);
  }

  /**
   * 执行多个并发请求
   * @param {Array} list axios Promise 对象
   */
  static all(list) {
    if (!isArray(list)) {
      throw Error('必须传入一个数组！');
    }
    return this.httpInstance.all(list)
  }
}
