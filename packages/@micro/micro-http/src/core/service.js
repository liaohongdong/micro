/*
 * @Author: hongdong.liao
 * @Date: 2021-01-05 18:17:05
 * @LastEditors: lingyong.zeng
 * @LastEditTime: 2021-05-06 09:05:12
 * @FilePath: /micro-http/src/core/service.js
 */
import axios from 'axios';
import Http from '../utils/http';
// import { addAxiosCancel } from './cancel';
import { LocalStorage, logout } from '@micro/micro-core';
import { Message, } from 'element-ui';
import NProgress from 'nprogress';
import { VUE_APP_BASE_API_GW } from '../config/settings';

// 用于存储目前状态为pending的请求标识信息
const pendingRequest = [];

// const LOGOUT_ERROR_CODE = [
//   'B01032'
// ];

// some api request do not need cancel
const REQUEST_CANCEL_TOKEN_WHITE_LIST = [
  // '/user/tenant/switch',
  // '/user/user/tenant/dropdown',
  // '/mail/mail/personConfig/getConfig',
  // '/mail/mail/personConfig/updateConfig'
];

export const NEED_MANUALLY_HANDLE_CODE_OBJ = {
  SHOW_LOG_LINK: 'B18027',
  LOGISTICS_WAREHOUSE: 'B05017',
  LOGISTICS_PICKUPING: 'A05093',
  LOGISTICS_SOME_PICKUPING: 'A05028',
};

// NProgress 配置
NProgress.configure({ showSpinner: false, });

// 配置项
const options = {
  axiosOptions: {
    baseURL: VUE_APP_BASE_API_GW,
    //默认超时时间
    timeout: 30000,
  },
  reqInterceptSuccess: config => {
    // 开启 progress bar
    NProgress.start();
    const token = LocalStorage.getToken();

    config.headers['Access-Control-Allow-Origin'] = '*';

    // 头部加入语言参数
    config.headers['x-ca-language'] = LocalStorage.getLanguage() === 'en' ? 'en_US' : 'zh_CN';
    // 加入请求的唯一ID
    config.headers['x-ca-reqid'] = Math.random() + new Date().getTime();
    // 加入请求的时间戳
    config.headers['x-ca-reqtime'] = new Date().getTime();
    if (token) {
      //让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = 'bearer ' + token;
    }
    // only push to the state when white list do not contain, use like compare
    // if (!REQUEST_CANCEL_TOKEN_WHITE_LIST.some(i => `/${config.url}`.indexOf(i) > -1)) {
    //     config.cancelToken = new axios.CancelToken(e => {
    //         addAxiosCancel({
    //             cancel: e,
    //             url: `${location.host}/${config.url}`,
    //         })
    //     });
    // }
    // 微前端1.0版本暂时取消该功能。
    // 区别请求的唯一标识，这里用方法名+请求路径
    // 如果一个项目里有多个不同baseURL的请求，可以改成`${config.method} ${config.baseURL}${config.url}`
    // if (config.cancelToken !== false) {
    //   const requestMark = `${config.method}-${config.url}`;
    //   // 找当前请求的标识是否存在pendingRequest中，即是否重复请求了
    //   const markIndex = pendingRequest.findIndex(item => {
    //       return item.name === requestMark;
    //   });
    //   // 存在，即重复了
    //   if (markIndex > -1) {
    //       // 取消上个重复的请求
    //       pendingRequest[markIndex].cancel();
    //       // 删掉在pendingRequest中的请求标识
    //       pendingRequest.splice(markIndex, 1);
    //   }
    //   //（重新）新建针对这次请求的axios的cancelToken标识
    //   const CancelToken = axios.CancelToken;
    //   const source = CancelToken.source();
    //   config.cancelToken = source.token;
    //   // 设置自定义配置requestMark项，主要用于响应拦截中
    //   config.requestMark = requestMark;
    //   // 记录本次请求的标识
    //   pendingRequest.push({
    //       name: requestMark,
    //       cancel: source.cancel,
    //   });
    // }
    return config;
  },
  respInterceptSuccess: res => {
    //关闭 progress bar
    NProgress.done();
    if(res.config.cancelToken !== false){
      // 根据请求拦截里设置的requestMark配置来寻找对应pendingRequest里对应的请求标识
      const markIndex = pendingRequest.findIndex(item => {
        return item.name === res.config.requestMark;
      });
      // 找到了就删除该标识
      markIndex > -1 && pendingRequest.splice(markIndex, 1);
    }
    const { status, data, } = res;
    const { code, data: dataForm, msg, error_description: errorDescription, } = data
    // 如果是401则跳转到登录页面
    if (status === 401) {
      logout();
      location.reload();
    }
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
      const message = msg || errorDescription || '未知错误';
      return Promise.reject(new Error(message));
    }
    // B01032 登录超时
    if (code === 'B01032' || code === 'A00998') {
      logout();
      Message.error({
        message: '登录超时，请重新登陆',
        duration: 250,
        onClose: () => {
          location.reload();
        }
      });
      return Promise.reject(new Error('登录超时，请重新登陆'));
    }

    if (code !== '000000') {
        const message = msg || errorDescription || '未知错误';
        // 需要手动在页面处理的逻辑
        if (Object.values(NEED_MANUALLY_HANDLE_CODE_OBJ).includes(code)) {
            return Promise.reject({
                message,
                code,
            });
        }
        Message.error(message);
        return Promise.reject(new Error(message));
    }
    return dataForm;
  },
  respInterceptError: error => {
    NProgress.done();
    if (axios.isCancel(error)) {
        // 手动取消的请求 关闭promise链
        return new Promise(() => ({}));
    }
    return Promise.reject(new Error(error));
  },
};

// 实例化http
const http = new Http(options);

export default http;
