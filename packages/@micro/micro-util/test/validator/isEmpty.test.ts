import chai from 'chai';
import { Validator, } from '../../index';

describe('#isEmpty Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isEmpty(null));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isEmpty('null'), false);
    });
    it('Should return false', () => {
        chai.assert.equal(Validator.isEmpty(false), false);
    });
});
