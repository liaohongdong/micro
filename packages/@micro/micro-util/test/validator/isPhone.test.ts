import chai from 'chai';
import { Validator, } from '../../index';

describe('#isPhone Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isPhone('0755-27611111'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isPhone('0755-27611111'), true);
    });
});