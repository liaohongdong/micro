import chai from 'chai';
import { DateHelper, } from '../../index';

const date1 = new Date('Sun Dec 12 2020 22:09:19 GMT+0800 (中国标准时间)');

describe('#getTimeInterval Function', () => {
    it('Should type of sting', () => {
        chai.assert.isString(DateHelper.getTimeInterval(date1));
    });
});