import chai from 'chai';
import { Validator, } from '../../index';

describe('#isIdCard Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isIdCard('11010119900307627X'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isIdCard('11010119900307627X'), true);
    });
});