import chai from 'chai';
import { Validator, } from '../../index';

describe('Test isFunc', () => {

    describe('#isString Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isString('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isString('13250321111'), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isString(1234), false);
        });
    });

    describe('#isNumber Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isNumber('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isNumber(23123), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isNumber('1234'), false);
        });
    });

    describe('#isBoolean Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isBoolean('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isBoolean(true), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isBoolean('1234'), false);
        });
    });

    describe('#isFunction Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isFunction('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isFunction(chai.assert.equal), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isFunction('1234'), false);
        });
    });

    describe('#isSymbol Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isSymbol('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isSymbol(Symbol('test')), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isSymbol('1234'), false);
        });
    });

    describe('#isObject Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isObject('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isObject({ a: 2, }), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isObject('1234'), false);
        });
    });

    describe('#isArray Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isArray('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isArray([1, 2, 3, 4]), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isArray('1234'), false);
        });
    });

    describe('#isDate Function', () => {
        it('Should return type of boolean', () => {
            chai.assert.isBoolean(Validator.isDate('13250321111'));
        });
        it('Should return true', () => {
            chai.assert.equal(Validator.isDate(new Date()), true);
        });
        it('Should return false', () => {
            chai.assert.equal(Validator.isDate('1234'), false);
        });
    });
});