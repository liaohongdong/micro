import chai from 'chai';
import { Validator, } from '../../index';

describe('#isObjDeepEqual Function', () => {
    it('Should return type of boolean', () => {
        chai.assert.isBoolean(Validator.isObjDeepEqual(11, 11));
    });
    it('Compare deep and return true.', () => {
        const date1 = new Date(1606462059689);
        const date2 = new Date(1606462059689);
        const symbol1 = Symbol('test');
        const symbol2 = Symbol('test');
        chai.assert.equal(Validator.isObjDeepEqual(
            [1, 2, true, date1, symbol1, '4', { a:'test',
                b:1, }, [1, 2], function a(){return;}],
            [1, 2, true, date2, symbol2, '4', { a:'test',
                b:1, }, [1, 2], function a(){return;}]
        ), true);
    });
    it('Should Skip the comparison of function ande return true.', () => {
        chai.assert.equal(Validator.isObjDeepEqual(
            { a: function fun1(){return;},
                b: [1, 2, 3], },
            { a: function fun2(){return;},
                b: [1, 2, 3], },
            true
        ), true);
    });
    it('Should return false.', () => {
        chai.assert.equal(Validator.isObjDeepEqual(
            [1, 2, 3, '4', { a: 'test', }, [1, 2], function a(){return;}],
            [1, 2, 3, '4', { a: 'test', }, [1, 2, 3], function a(){return;}]
        ), false);
    });
    it('Should skip function and return true.', () => {
        chai.assert.equal(Validator.isObjDeepEqual(
            [function a(){return;}],
            [function b(){return;}],
            true
        ), true);
    });
});