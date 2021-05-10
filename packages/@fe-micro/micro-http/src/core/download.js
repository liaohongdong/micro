/*
 * @Author: hongdong.liao
 * @Date: 2021-05-08 11:57:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-10 15:52:24
 * @FilePath: /microDemo/micro/packages/@fe-micro/micro-http/src/core/download.js
 */
import axios from 'axios';
import { LocalStorage, } from '@fe-micro/micro-core';
import { Message, } from 'element-ui';
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
export async function comonDownLoad(method, url, cb, params, downFileName, msg, needResultMsg = false) {
    instance.defaults.responseType = 'blob';
    instance.defaults.crossDomain = true;
	instance.defaults.withCredentials = true;
    instance.defaults.headers['Authorization'] = 'bearer ' + LocalStorage.getToken();
    // 头部加入语言参数
    instance.defaults.headers['x-ca-language'] = LocalStorage.getLanguage() === 'en' ? 'en_US' : 'zh_CN';
    // 加入请求的唯一ID
    instance.defaults.headers['x-ca-reqid'] = Math.random() + new Date().getTime();
    // 加入请求的时间戳
    instance.defaults.headers['x-ca-reqtime'] = new Date().getTime();
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    instance({
        url: url,
        data: params,
        responseType: 'blob',
        method: method,
    }).then(result => {
        if (result.status !== 200) {
            Message({
                message: '网络错误，请稍后重试',
                type: 'error',
            });
            return;
        }
        if (result.data.type === 'application/json' && needResultMsg) {
            const fileReader = new FileReader();
            fileReader.onload = function() {
                const { result, } = fileReader;
                const errorInfos = JSON.parse(result);
                const { msg, } = errorInfos;
                Message({
                    message: msg || '服务器异常，下载失败，请稍后重试~',
                    type: 'error',
                });
            };
            fileReader.readAsText(result.data);
            return;
        }
        if (result.data.type === 'application/json') {
            Message({
                message: '服务器异常，下载失败，请稍后重试~',
                type: 'error',
            });
            if (cb) {
                cb && cb();
            }
            return;
        }
        try {
            let disposition = result.headers['content-disposition'] || result.headers['Content-Disposition'] || result.headers['Content-disposition']
            let fileName = downFileName ? downFileName : disposition.split('=')[1];
            let a = document.createElement('a');
            let blob = new Blob([result.data], { type: 'application/vnd.ms-excel', });
            a.download = decodeURI(fileName);
            a.href = window.URL.createObjectURL(blob);
            a.click();
            a.remove();
            Message({
                message: `${decodeURI(fileName)}${msg ? msg : '下载成功!'}`,
                type: 'success',
            });
            cb && cb(decodeURI(fileName));
        } catch (error) {
            Message({
                message: '服务器异常，下载失败，请稍后重试！',
                type: 'error',
            });
        }
    });
}
