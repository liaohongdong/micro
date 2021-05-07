import { MathHelper, } from '../../index';
import chai from 'chai';

describe('#splitNumByThou Function', () => {
    it('Should return 10,056.134', () => {
        chai.assert.equal(MathHelper.splitNumByThou(10056.134, ','), '10,056.134');
    });
    it('Should return 10 056.134', () => {
        chai.assert.equal(MathHelper.splitNumByThou(10056.134, ' '), '10 056.134');
    });
    it('Should return 10,056.00', () => {
        chai.assert.equal(MathHelper.splitNumByThou('10056.00', ','), '10,056.00');
    });
});