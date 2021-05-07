/*
 * @Descripttion: url替换query函数
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:22:07
 */

export default function changeUrlPar(destiny: string, par: string, value: string | number | boolean): string {
    const pattern = par + '=([^&]*)';
    const replaceText = par + '=' + value;
    if (destiny.match(pattern)) {
        let tmp = '/\\' + par + '=[^&]*/';
        tmp = destiny.replace(eval(tmp), replaceText);
        return (tmp);
    }
    if (destiny.match('[\?]')) {
        return destiny + '&' + replaceText;
    }
    return destiny + '?' + replaceText;
}