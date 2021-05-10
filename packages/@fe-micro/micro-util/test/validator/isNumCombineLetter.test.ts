import chai from 'chai';
import { Validator, isNumCombineLetter, } from '../../index';

describe('#isNumCombineLetter Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(isNumCombineLetter('aaaAAA111'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isNumCombineLetter('aaaAAA111'), true);
    });
    it('Should return false', () => {
        chai.assert.equal(Validator.isNumCombineLetter('aaaAAA111测试'), false);
    });
});