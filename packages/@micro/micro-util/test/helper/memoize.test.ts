import chai from 'chai';
import { Helper, } from '../../index';

let timeStamp;     // 用于判断执行多少次的变量
const getSum = (a: number, b: number) => {
    timeStamp = new Date();
    return a + b;
};

describe('#memoize Function', () => {
    const getSumWithMemoize = Helper.memoize(getSum);
    const cache = (getSumWithMemoize as Record<string, any>).cache;

    // memoize 转化后需返回一个函数，且具有 size 属性，值为 0
    it('Should return type of function, and have size property, value is 0', () => {
        chai
            .expect(typeof getSumWithMemoize)
            .to.equal('function');

        chai
            .expect(cache)
            .to.have.property('size');

        chai
            .expect(cache.size)
            .to.equal(0);
    });

    // 设置缓存时，缓存数量需加一且能访问缓存值
    it('Should set size + 1 when set cache, and can visit the cache key', () => {
        chai
            .expect(cache.set('key', 'Memoize').size)
            .to.equal(1);

        chai
            .expect(cache.get('key'))
            .to.equal('Memoize');
    });

    // 删除缓存时，缓存数量需减一且删除对应缓存值
    it('Should set size - 1 when delete cache, and can not visit the cache key', () => {
        chai
            .expect(cache.delete('key').size)
            .to.equal(0);

        chai
            .expect(cache.get('key'))
            .to.equal(undefined);
    });

    // 清空缓存时，缓存数量归零，且缓存值清空
    it('Should clear cache and set size 0, and can not visit cache key', () => {
        chai
            .expect(cache.set('key1', 'Memoize').set('key2', 'Lodash').clear().size)
            .to.equal(0);

        chai
            .expect(cache.get('key1'))
            .to.equal(undefined);
    });

    // memoize 转化后的函数，参数相同时多次调用不进行真实调用，从缓存对象访问
    it('Should once call when multiple call by the same arguments', () => {
        getSumWithMemoize(1, 2);
        const onceTimeStamp = timeStamp;  // 执行一次后存储时间戳值
        getSumWithMemoize(1, 2);
        getSumWithMemoize(1, 2);
        getSumWithMemoize(1, 2);

        // 执行多次后比对时间戳是不是旧的，若是则可证明相同参数调用，仅进行一次真实计算
        chai
            .expect(timeStamp)
            .to.equal(onceTimeStamp);
    });

    // memoize 转化后的函数，支持第二个参数作为函数处理缓存对象的键值
    it('Should support second argument as function to handle cache key', () => {
        const getSumWithCustomMemoizeKey = Helper.memoize(getSum, (...args) => args.join('-'));
        const cache = (getSumWithCustomMemoizeKey as Record<string, any>).cache;
        getSumWithCustomMemoizeKey(1, 2);

        chai
            .expect(cache.has('1-2'))
            .to.equal(true);
    });
});