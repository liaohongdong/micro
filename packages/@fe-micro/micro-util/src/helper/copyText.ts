/*
 * @Descripttion: 复制文本
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:21:01
 */

export default function copyText(text: string | number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if (text && (typeof text === 'number' || typeof text === 'string')) {
            text = String(text);
            let oInput: HTMLInputElement;
            if (document.querySelector('.oInput')) {
                oInput = <HTMLInputElement>document.querySelector('.oInput');
                oInput.style.display = 'block';
            } else {
                oInput = document.createElement('input');
                document.body.appendChild(oInput);
                oInput.className = 'oInput';
            }
            oInput.value = text;
            oInput.select();
            document.execCommand('copy');
            oInput.style.display = 'none';
            resolve(text);
        } else {
            reject('The parameter must be Number or String.');
        }
    });
}