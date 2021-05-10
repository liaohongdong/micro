import chai from 'chai';
import { Helper, } from '../../index';

describe('#sumBy Function', () => {

    const objects = [{ 'n': 4, }, { 'n': 2, }, { 'n': 8, }, { 'n': 6, }];

    it('Should return type of number: 0', () => {
        chai
            .expect(Helper.sumBy([]))
            .to.equal(0);
    });

    it('Should return type of number: 20', () => {
        chai
            .expect(Helper.sumBy(objects, 'n'))
            .to.equal(20);

        chai
            .expect(Helper.sumBy(objects, ({ n, }) => n))
            .to.equal(20);
    });

    it('Should return type of number: 5', () => {
        chai
            .expect(Helper.sumBy([[1, 2, 3], [1, 2]], 'length'))
            .to.equal(5);
    });

    it('Should return type of string: LiliMaggie', () => {
        chai
            .expect(Helper.sumBy([{ name: 'Lili', }, { name: 'Maggie', }], 'name'))
            .to.equal('LiliMaggie');
    });

    it('Should return type of undefined', () => {
        chai
            .expect(Helper.sumBy(objects, 'x'))
            .to.equal(undefined);
    });
});