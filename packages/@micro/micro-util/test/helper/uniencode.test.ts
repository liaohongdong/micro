import chai from 'chai';
import { Helper, } from '../../index';

describe('#uniencode Function', () => {
    it('Should return type of string', () => {
        chai.assert.isString(Helper.uniencode('www.baidu.com'));
    });
    it('Should return %2C', () => {
        chai.assert.equal(Helper.uniencode(','), '%2C');
    });
});