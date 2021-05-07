import chai from 'chai';
import { Helper, } from '../../index';

describe('#serialize Function', () => {
    it('Should return type of string', () => {
        chai.assert.isString(Helper.serialize({
            isEdit: true,
            canCancel: false,
        })
        );
    });
    it('Should return isEdit=true&canCancel=false', () => {
        chai.assert.equal(Helper.serialize({
            isEdit: true,
            canCancel: false,
        }),
        'isEdit=true&canCancel=false');
    });
});