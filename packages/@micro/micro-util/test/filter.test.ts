import chai from 'chai';
import { Filter, } from '../index';

describe('Filter Section', () => {
    describe('Round one: ', () => {
        const data = [
            {
                name: 'a',
                age: 2,
                sex: 0,
            },
            {
                name: 'ab',
                age: 1,
                sex: 1,
            },
            {
                name: 'c',
                age: 22,
                sex: 10,
            }
        ];
        it('Should left two items', () => {
            chai.assert.equal(Filter.searchListAllByVal('a', data).length, 2);
        });
        it('Should left one item', () => {
            chai.assert.equal(Filter.searchListAllByVal('c', data, ['name']).length, 1);
        });
        it('Should left zero item', () => {
            chai.assert.equal(Filter.searchListAllByVal('d', data, ['name']).length, 0);
        });
        it('Should throw a type error', () => {
            chai.assert.throws(() => Filter.searchListAllByVal('d', [], ['name']), TypeError, 'List must be an not-empty array! (Filter.js)');
        });
    });
});