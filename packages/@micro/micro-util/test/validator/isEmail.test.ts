import chai from 'chai';
import { Validator, } from '../../index';

describe('#isEmail Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isEmail('yuancheng.cai@microgroup.com'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isEmail('yuancheng.cai@microgroup.com'), true);
    });
});