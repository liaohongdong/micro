import chai from 'chai';
import { Validator, } from '../../index';
import newMenu from './newMenu.json';
import oldMenu from './oldMenu.json';

describe('#isObjDeepEqual Function', () => {

    it('Should return false.', () => {
        chai.assert.equal(Validator.isObjDeepEqual(
            newMenu,
            oldMenu
        ), false);
    });
    // it('Should skip function and return true.', () => {
    //     chai.assert.equal(Validator.isObjDeepEqual(
    //         [function a(){return;}],
    //         [function b(){return;}],
    //         true
    //     ), true);
    // });
});