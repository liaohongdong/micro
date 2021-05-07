/*
 * @Descripttion: 克隆函数
 * @Author: 曾令涌
 * @Date: 2021-01-24 15:38:36
 * @LastEditTime: 2021-03-18 17:18:49
 */

import { getType, } from '.';


const enum DataType {
    Boolean = 'boolean',
    Number = 'number',
    String = 'string',
    Object = 'object',
    Array = 'array',
    Symbol = 'symbol',
    Function = 'function',
    Map = 'map',
    Set = 'set',
    Date = 'date',
    Regexp = 'regexp',
    Error = 'error',
}
const DEEP_TAG = [
    DataType.Map,
    DataType.Set,
    DataType.Array,
    DataType.Object
];

// 初始化被克隆的对象
function getInit<T>(target: T|any) {
    const Ctor = target.constructor;
    return new Ctor();
}
// 通用forEach函数，使用 while 循环提示性能
function forEach<T>(arr: Array<T>, iteratee: any) {
    let index = -1;
    const { length, } = arr;
    while (++index < length) {
        iteratee(arr[index], index);
    }
    return arr;
}
// 克隆Symbol
function cloneSymbol<T>(target: T) {
    return Object(Symbol.prototype.valueOf.call(target));
}
// 克隆正则
function cloneReg<T>(target: T|any) {
    const rexFlags = /\w*$/;
    const result = new target.constructor(target.source, rexFlags.exec(target));
    result.lastIndex = target.lastIndex;
    return result;
}
// 克隆函数
function cloneFunction(func: any) {
    // const bodyReg = /(?:{)(.|\n)+(?=})/m;
    // const paramReg = /(?:\().+(?=\)\s+{)/;
    // const funcString = func.toString();
    // if (func.prototype) {
    //     const param = paramReg.exec(funcString);
    //     const body = bodyReg.exec(funcString);
    //     if (body) {
    //         if (param) {
    //             const paramArr = param[0].split(',');
    //             return new Function(...paramArr, body[0]);
    //         }
    //         return new Function(body[0]);
    //     }
    //     return null;
    // }
    // return eval(funcString);
    return func;
}
// 克隆不可遍历类型
function cloneOtherType<T>(target: T|any, type: DataType) {
    const Ctor = target.constructor;
    switch (type) {
    case DataType.Boolean:
    case DataType.Number:
    case DataType.String:
    case DataType.Date:
        return new Ctor(target);
    case DataType.Error:
        return new Ctor(target.message);
    case DataType.Regexp:
        return cloneReg(target);
    case DataType.Symbol:
        return cloneSymbol(target);
    case DataType.Function:
        return cloneFunction(target);
    default:
        return null;
    }
}

export default function cloneDeep<T>(target: T|any, map = new WeakMap()): T {
    // 克隆原始类型
    const _type = typeof target;
    if (target === null || !['object', 'function'].includes(_type)) {
        // 非引用类型，直接返回
        return target;
    }

    let cloneTarget: any;
    const type = <DataType>getType(target);
    if (DEEP_TAG.includes(type as DataType)) {
        // 深拷贝类型
        cloneTarget = getInit(target);
    } else {
        // 普通拷贝类型
        return cloneOtherType(target, type);
    }

    // 处理循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 处理set
    if (type === DataType.Set) {
        target.forEach((value: any) => {
            cloneTarget.add(cloneDeep(value, map));
        });
        return cloneTarget;
    }

    // 处理map
    if (type === DataType.Map) {
        target.forEach((value: any, key: string) => {
            cloneTarget.set(key, cloneDeep(value, map));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === DataType.Array ? undefined : Object.keys(target);
    forEach(keys || target, (value: any, key: string) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = cloneDeep(target[key], map);
    });
    return cloneTarget;
}