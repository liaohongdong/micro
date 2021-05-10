/*
 * @Descripttion: --
 * @Author: 曾令涌
 * @Date: 2021-01-27 15:38:36
 * @LastEditTime: 2021-01-28 10:24:37
 */

import chai from 'chai';
import { Helper, } from '../../index';

describe('#unionBy Function', () => {
    it('Should return unique Array by iteratee is function', () => {
        chai
            .expect(Helper.unionBy([2.1], [1.2, 2.3], Math.floor))
            .to.deep.equal([2.1, 1.2]);
    });

    it('Should return unique Array by iteratee is property string', () => {
        chai
            .expect(Helper.unionBy([{ 'x': 1, }, { 'y': 2, }], [{ 'x': 2, }, { 'x': 1, }], 'x'))
            .to.deep.equal([{ 'x': 1, }, { 'y': 2, }, { 'x': 2, }]);
    });

    it('Should throw error when iteratee is not function or not property string', () => {
        chai.assert.throws(
            () => Helper.unionBy([1, 2], [1, 2], null),
            TypeError,
            'Expected iteratee is a function or property string'
        );
    });

    it('Should throw error when array is not object array by iteratee is property string', () => {
        chai.assert.throws(
            () => Helper.unionBy([1, 2], [1, 2], 'index'),
            TypeError,
            'Expected arrays is object array by iteratee is property string'
        );
    });
});