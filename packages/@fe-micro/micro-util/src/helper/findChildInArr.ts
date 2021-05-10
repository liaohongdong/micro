/*
 * @Descripttion: 查找数组children函数。
 * @Author: 易鑫
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-01-24 17:16:36
 */

export default function findChildInArr(array: Array<any>, value: string, key = 'id', likeCompare = false, childrenKey = 'children'): Record<string, any> {
    if (!Array.isArray(array)) {
        throw new Error('Array must be an array!');
    }
    if (!value) {
        throw new TypeError('Value must not be null!');
    }
    const obj: Record<string, any> = {
        root: null,
        item: null,
    };
    const findDeepestChild = (arr: Array<any>) => arr.some((item): boolean => {
        const children = item[childrenKey];
        if (children && children.length) {
            return findDeepestChild(children);
        }
        if (likeCompare) {
            if (`${value}`.indexOf(item[key]) > -1) {
                obj.item = item;
                return true;
            }
        } else {
            // FIXEBUG
            if (key === 'id' && value === item[key]) {
                obj.item = item;
                return true;
            }
            if (`${value}` === item[key]) {
                obj.item = item;
                return true;
            }
        }
        return false;
    });
    array.some(item => {
        const children = item[childrenKey];
        if (children && children.length) {
            const flag = findDeepestChild(children);
            if (flag) {
                obj.root = item;
            }
            return flag;
        }
        return false;
    });
    return obj;
}