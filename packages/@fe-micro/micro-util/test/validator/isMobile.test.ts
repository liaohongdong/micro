import chai from 'chai';
import { Validator, } from '../../index';

describe('#isMobile Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isMobile('13250321111'));
    });
    it('Should return true', () => {
        chai.assert.equal(Validator.isMobile('13250321111'), true);
    });
});