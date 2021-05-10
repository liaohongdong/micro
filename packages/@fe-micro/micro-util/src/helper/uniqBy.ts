/*
 * @Descripttion: 数组根据迭代函数值去重
 * @Author: 蔡远程
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-29 12:17:13
 */
interface uniquFunction {
    (item: any): any
}

export default function uniqBy
<T>(
    arr: Array<T>,
    predicate: string | uniquFunction
): Array<T>
{
    const set = new Set();
    const result = [];
    let idx = 0;

    while (idx < arr.length) {
        const item = arr[idx];
        const appliedItem =
        typeof predicate === 'function'
            ? predicate(item)
            : (<Record<string, any>>item)[predicate];

        if (!set.has(appliedItem)) {
            set.add(appliedItem);
            result.push(item);
        }
        idx += 1;
    }
    return result;
}
