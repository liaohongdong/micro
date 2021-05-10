import { MathHelper, } from '../../index';
import chai from 'chai';

describe('#fixedNumber Function', () => {
    it('Should type of string', () => {
        chai.assert.isString(MathHelper.fixedNumber(1111.11));
    });
    it('Should keep two number of decimal by default', () => {
        chai.assert.equal(MathHelper.fixedNumber(11111.5555), '11111.56');
    });
    it('Should zeroize by default', () => {
        chai.assert.equal(MathHelper.fixedNumber(11111.55, 4), '11111.5500');
    });
    it('Should return 11111.55', () => {
        chai.assert.equal(MathHelper.fixedNumber(11111.55, 4, -1, false), '11111.55');
    });
    it('Should return 11.55', () => {
        chai.assert.equal(MathHelper.fixedNumber(11111.55, 4, 2, false), '11.55');
    });
});