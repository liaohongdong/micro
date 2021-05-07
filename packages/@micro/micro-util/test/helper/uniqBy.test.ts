import chai from 'chai';
import { Helper, } from '../../index';

describe('#uniqBy Function', () => {
    const arr = [
        {
            id: 1,
            name: 'lisi',
            age: 24,
        }, {
            id: 2,
            name: 'lisi',
            age: 24,
        }, {
            id: 3,
            name: 'zhangsan',
            age: 18,
        }
    ];
    it('Should return type of array', () => {
        chai.assert.isArray(Helper.uniqBy(arr, 'name'));
    });
    it('Should return array', () => {
        chai.expect(Helper.uniqBy(arr, 'name')).to.deep.equal(
            [{
                id: 1,
                name: 'lisi',
                age: 24,
            }, {
                id: 3,
                name: 'zhangsan',
                age: 18,
            }]
        );
    });
    it('Should return [2.1, 1.2]', ()=>{
        chai.expect(Helper.uniqBy( [2.1, 1.2, 2.3], Math.floor) ).to.deep.equal([2.1, 1.2]);
    });
});