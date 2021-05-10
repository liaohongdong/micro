import chai from 'chai';
import { Helper, } from '../../index';

const BASE_OBJ_ARRAY = [
    {
        id: 1,
        name: 'lisi',
        age: 24,
    },
    {
        id: 2,
        name: 'lisi',
        age: 24,
    },
    {
        id: 3,
        name: 'zhangsan',
        age: 18,
    }
];

describe('#findIndex Function', () => {
    it('Should return number index: 0', () => {
        chai
            .expect(Helper.findIndex(BASE_OBJ_ARRAY, ({ age, }) => age === 24))
            .equal(0);
    });

    it('Should return number index: 1', () => {
        chai
            .expect(Helper.findIndex(BASE_OBJ_ARRAY, ({ age, }) => age === 24, 1))
            .equal(1);
    });

    it('Should return number index: -1', () => {
        chai
            .expect(Helper.findIndex(BASE_OBJ_ARRAY, null))
            .equal(-1);
    });
});