import chai from 'chai';
import { Helper, } from '../../index';

describe('#getType Function', () => {
    it('Should return type of string', () => {
        chai.assert.isString(Helper.getType(true));
    });
    it('Should return array', () => {
        chai.assert.equal(Helper.getType([1, 2, 3]), 'array');
    });
    it('Should return object', () => {
        chai.assert.equal(Helper.getType({ a: 1, }), 'object');
    });
});