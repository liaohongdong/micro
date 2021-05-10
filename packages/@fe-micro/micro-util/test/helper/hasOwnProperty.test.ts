import chai from 'chai';
import { hasOwnProperty, } from '../../index';

describe('#getType Function', () => {
    const obj = {
        a: 1,
    };
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(hasOwnProperty(obj, 'a'));
    });
    it('Should return true', () => {
        chai.assert.equal(hasOwnProperty(obj, 'a'), true);
    });
    it('Should return false', () => {
        chai.assert.equal(hasOwnProperty(obj, 'b'), false);
    });
});