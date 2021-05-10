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


describe('#findLastIndex Function', () => {
    it('Should return number index: 1', () => {
        chai
            .expect(Helper.findLastIndex(BASE_OBJ_ARRAY, ({ age, }) => age === 24))
            .equal(1);
    });
});
