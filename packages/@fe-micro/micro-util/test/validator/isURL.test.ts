import chai from 'chai';
import { Validator, } from '../../index';

describe('#isURL Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isURL('www.baidu.com'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isURL('http://www.baidu.com'), true);
    });
});