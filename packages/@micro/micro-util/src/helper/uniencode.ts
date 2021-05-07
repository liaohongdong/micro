/*
 * @Descripttion: 特殊编码（可处理回车）
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:23:04
 */

export default function uniencode(text: string): string {
    text = escape(text.toString()).replace(/\+/g, '%2B');
    const matches = text.match(/(%([0-9A-F]{2}))/gi);
    if (matches) {
        for (let matchid = 0; matchid < matches.length; matchid++) {
            const code = matches[matchid].substring(1, 3);
            if (parseInt(code, 16) >= 128) {
                text = text.replace(matches[matchid], '%u00' + code);
            }
        }
    }
    text = text.replace('%25', '%u0025');
    return text;
}