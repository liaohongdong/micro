import { MathHelper, } from '../../index';
import chai from 'chai';

describe('#number2CNY Function', () => {
    it('Should type of string', () => {
        chai.assert.isString(MathHelper.number2CNY(10056));
    });
    it('Should change lower by default', () => {
        chai.assert.equal(MathHelper.number2CNY(12300.23), '一万二千三百元二角三分');
    });
    it('Should change upper', () => {
        chai.assert.equal(MathHelper.number2CNY(12300.23, true), '壹万贰仟叁佰元贰角叁分');
    });
});