/*
 * @Author: hongdong.liao
 * @Date: 2021-05-08 11:57:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:52:35
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-http/src/core/upload.js
 */
import axios from 'axios';
import { LocalStorage, } from '@fe-micro/micro-core';
import { VUE_APP_BASE_API_GW } from '../config/settings';

let instance = axios.create({ baseURL: VUE_APP_BASE_API_GW, });

/**
 *@params {文件下载的请求参数}
 *@url {请求url不需要考虑网关gw自动拼接}
 *@downFileName {自定义下载的文件名称}
 *@msg {下载成功之后的提示}
 *@cb {回调函数}
 *@method {请求格式}
 */
export async function comonUpLoad(url, params) {
    instance.defaults.crossDomain = true;
	instance.defaults.withCredentials = true;
    instance.defaults.headers['Authorization'] = 'bearer ' + LocalStorage.getToken();
    // 头部加入语言参数
    instance.defaults.headers['x-ca-language'] = LocalStorage.getLanguage() === 'en' ? 'en_US' : 'zh_CN';
    // 加入请求的唯一ID
    instance.defaults.headers['x-ca-reqid'] = Math.random() + new Date().getTime();
    // 加入请求的时间戳
    instance.defaults.headers['x-ca-reqtime'] = new Date().getTime();

    instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    return instance({
        url: url,
        data: params,
        method: 'post',
    });
}
