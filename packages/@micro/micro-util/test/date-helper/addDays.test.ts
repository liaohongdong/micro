import chai from 'chai';
import { DateHelper, } from '../../index';

const date1 = new Date('Sun Dec 12 2020 22:09:19 GMT+0800 (中国标准时间)');
const date3 = '1608190374317';

describe('#addDays Function', () => {
    it('Should type of string', () => {
        chai.assert.isString(DateHelper.addDays(2, date1));
    });
    it('Should return two days from date1', () => {
        chai.assert.equal(DateHelper.addDays(2, date1), '2020-12-14');
    });
    it('Should return two days from date1', () => {
        chai.assert.equal(DateHelper.addDays(2, date3), '2020-12-19');
    });
});