import chai from 'chai';
import { Validator, } from '../../index';

describe('#isUpperCase Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isUpperCase('UPPER CASE!'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isUpperCase('UPPER CASE'), true);
    });

    it('Should return false', () => {
        chai.assert.equal(Validator.isUpperCase('Upper Case'), false);
    });
});