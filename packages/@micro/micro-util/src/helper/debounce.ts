/*
 * @Descripttion: 防抖函数
 * @Author: 易鑫
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-29 19:09:39
 */

type Procedure = (...args: any) => void;
export default function debounce<F extends Procedure>(
    func: F,
    timeout = 0
):() => any {
    let timer: NodeJS.Timeout;
    return function(this: ThisParameterType<F>, ...args) {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeout);
    };
}