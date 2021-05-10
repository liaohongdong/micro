import chai from 'chai';
import { DateHelper, } from '../../index';

const date1 = new Date('Sun Dec 12 2020 22:09:19 GMT+0800 (中国标准时间)');
const date3 = '1608190374317';

describe('#formatDate Function', () => {
    it('Should type of string', () => {
        chai.assert.isString(DateHelper.formatDate(date1, 'YYYY-MM-DD W hh:mm:ss'));
    });
    it('Should return formatted date', () => {
        chai.assert.equal(DateHelper.formatDate(date1, 'YYYY-MM-DD W hh:mm:ss'), '2020-12-12 星期六 22:09:19');
    });
    it('Should return formatted date', () => {
        chai.assert.equal(DateHelper.formatDate(date3), '2020-12-17 15:32:54');
    });
    it('Should return formatted date', () => {
        chai.assert.equal(DateHelper.formatDate(null), '');
    });
});