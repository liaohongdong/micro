/*
 * @Descripttion: countBy
 * @Author: 曾令涌
 * @Date: 2021-01-28 10:50:36
 * @LastEditTime: 2021-01-28 14:27:02
 */

import chai from 'chai';
import { Helper, } from '../../index';

describe('#countBy Function', () => {

    it('Should return type of object', () => {
        chai
            .expect(Helper.countBy([]))
            .to.be.an('object')
            .that.is.empty;

        chai
            .expect(Helper.countBy([1, 2]))
            .to.be.an('object');

        chai
            .expect(Helper.countBy([], Math.floor))
            .to.be.an('object')
            .that.is.empty;

        chai
            .expect(Helper.countBy([], 'length'))
            .to.be.an('object')
            .that.is.empty;

        chai
            .expect(Helper.countBy([1, 2], Math.floor))
            .to.be.an('object');

        chai
            .expect(Helper.countBy([1, 2], 'length'))
            .to.be.an('object');
    });

    it('Should throw TypeError when iteratee is not function or not property string', () => {
        chai.assert.throws(
            () => Helper.countBy([1, 2], {} as string),
            TypeError,
            'Expected iteratee is a function or property string'
        );
    });

    it('Should return the right result', () => {
        chai
            .expect(Helper.countBy([1, 2, 1]))
            .to.deep.equal(
                {
                    '1': 2,
                    '2': 1,
                }
            );

        chai
            .expect(Helper.countBy([6.1, 4.2, 6.3], Math.floor))
            .to.deep.equal(
                {
                    '4': 1,
                    '6': 2,
                }
            );

        chai
            .expect(Helper.countBy(['one', 'two', 'three'], 'length'))
            .to.deep.equal(
                {
                    '3': 2,
                    '5': 1,
                }
            );

        chai
            .expect(Helper.countBy([{ age: 18, }, { age: 30, }, { age: 18, }], 'age'))
            .to.deep.equal(
                {
                    '18': 2,
                    '30': 1,
                }
            );
    });
});