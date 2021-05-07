import chai from 'chai';
import { Helper, } from '../../index';

describe('#debounce Function', () => {
    it('should throttle a function', function(done) {
        let callCount = 0;
        const  throttled = Helper.throttle(function() { callCount++; }, 32);

        throttled();
        throttled();
        throttled();

        chai.expect(callCount).to.equal(1);

        setTimeout(function() {
            throttled();
            throttled();
            throttled();

            chai.expect(callCount).to.equal(2);
            done();
        }, 32);
    });
});