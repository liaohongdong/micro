import chai from 'chai';
import { Validator, } from '../../index';

describe('#isAlphabets Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isAlphabets('Alphatbets'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isAlphabets('Alphatbets'), true);
    });
});