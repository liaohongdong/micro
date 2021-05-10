import chai from 'chai';
import { UA, } from '../../src/browser/userAgent';

describe('#UA', () => {
    it('Should throw new ReferenceError', () => {
        chai.assert.throws(() => UA.isPc(), ReferenceError, '[Reference Error] Please run UA in a browser environment!');
    });
    it('Should isPc return true', () => {
        chai.expect(UA.isPc('Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36')).to.be.true;
    });
    it('Should isChrome return true', () => {
        chai.expect(UA.isChrome('Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36')).to.be.true;
    });
    it('Should isIE return true', () => {
        chai.expect(UA.isIE('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0')).to.be.true;
    });
    it('Should isFirefox return true', () => {
        chai.expect(UA.isFirefox('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:84.0) Gecko/20100101 Firefox/84.0')).to.be.true;
    });
    it('Should isMobile return true', () => {
        chai.expect(UA.isMobile('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1')).to.be.true;
    });
    it('Should isIOS return true', () => {
        chai.expect(UA.isMobile('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1')).to.be.true;
    });
    it('Should isAndroid return true', () => {
        chai.expect(UA.isAndroid('Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36')).to.be.true;
    });
    it('Should isWechat return true', () => {
        // eslint-disable-next-line max-len
        chai.expect(UA.isWechat('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 wechatdevtools/1.03.2101150 MicroMessenger/7.0.4 Language/zh_CN webview/16111102456617243 webdebugger port/51832 token/9c12d9b6b012b00fda36c78f0ed1d32e')).to.be.true;
    });
});
