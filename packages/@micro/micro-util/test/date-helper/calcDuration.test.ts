import chai from 'chai';
import { DateHelper, } from '../../index';

describe('#calcDuration Function', () => {
    it('Should type of sting', () => {
        chai.assert.isString(DateHelper.calcDuration(7482220));
    });

    it('Should return 2\'4\'\'42', () => {
        chai.assert.equal(DateHelper.calcDuration(7482220), '2\'4\'\'42');
    });
});