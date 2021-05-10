import chai from 'chai';
import { Helper, } from '../../index';

describe('#uniq Function', () => {
    const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
    it('Should return type of array', () => {
        chai.assert.isArray(Helper.uniq(arr));
    });
    it('Should return array by removing duplication', () => {
        chai.expect(Helper.uniq(arr)).to.deep.equal([1, 'true', true, 15, false, undefined, null, NaN, 'NaN', 0, 'a', {}, {}]);
    });
});