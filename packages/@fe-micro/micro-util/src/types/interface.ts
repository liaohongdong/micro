/*
 * @Descripttion: 该文件用来提供常用的接口。
 * @Date: 2021-01-24 15:46:43
 * @LastEditTime: 2021-02-05 11:55:47
 */
export interface PredicateFunc {
    <T extends Record<string, any>>
        (
        curVal: T,
        index: number,
        arr: Array<T>
    )
        : boolean
}

export interface FunctionLike {
    (this: any, ...args: any[]): any
}