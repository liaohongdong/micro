/*
 * @Author: 易鑫
 * @Date: 2021-01-29 14:21:08
 * @LastEditTime: 2021-01-29 19:22:54
 * @Description: 节流函数
 */
type Procedure = (...args: any) => void;
export default function throttle<F extends Procedure>(
    func: F,
    wait = 0
):() => any {
    let previous = 0;
    return function(this: ThisParameterType<F>, ...args) {
        const now = +new Date();
        if (now - previous >= wait){
            func.apply(this, args);
            previous = now;
        }
    };
}