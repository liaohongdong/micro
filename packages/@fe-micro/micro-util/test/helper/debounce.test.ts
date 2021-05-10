import chai from 'chai';
import { Helper, } from '../../index';

describe('#debounce Function', () => {
    it('Should debonce a function', (done) => {
        let callCount = 0;
        const debounced = Helper.debounce(function(value) {
            ++callCount;
            return value;
        }, 32);

        const results = [debounced('a'), debounced('b'), debounced('c')];
        chai.expect(results).to.deep.equal([undefined, undefined, undefined]);
        chai.expect(callCount).to.equal(0);

        setTimeout(function() {
            chai.expect(callCount).to.equal(1);
            done();
        }, 128);
    });
});