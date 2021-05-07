import chai from 'chai';
import { Validator, } from '../../index';

describe('#isLowerCase Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isLowerCase('lower case'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isLowerCase('lower case'), true);
    });

    it('Should return false', () => {
        chai.assert.equal(Validator.isLowerCase('Lower Case'), false);
    });
});