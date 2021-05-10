import chai from 'chai';
import { Helper, } from '../../index';

describe('#cloneDeep Function', () => {
    const map = new Map();
    map.set('1', 'Monday');
    map.set('2', 'Tuesday');

    const set = new Set();
    set.add('HTML');
    set.add('JavaScript');

    const target = {
        field1: 1,
        field2: undefined,
        field3: {
            child: 'child',
        },
        field4: [2, 4, 8],
        empty: null,
        map,
        set,
        bool: new Boolean(true),
        num: new Number(2),
        str: new String(2),
        symbol: Symbol(1),
        date: new Date(),
        reg: /\d+/,
        // error: new Error(),
        // func1: () => {
        //     console.log('有点东西');
        // },
    };

    it('Should return object, same attr for target', () => {
        chai
            .expect(Helper.cloneDeep(target))
            .to.deep.equal(target);
    });
});