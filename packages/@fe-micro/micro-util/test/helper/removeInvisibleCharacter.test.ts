import chai from 'chai';
import { Helper, } from '../../index';

const { expect, assert, } = chai;
const { removeInvisibleCharacter, } = Helper;

describe('#removeInvisibleCharacter Function', () => {
    // 若参数不为字符串类型则报错
    it('Should throw TypeError', () => {
        expect(() => removeInvisibleCharacter(true as unknown as any))
            .to.throw(TypeError);

        expect(() => removeInvisibleCharacter(true as unknown as any))
            .to.throw(TypeError);

        expect(() => removeInvisibleCharacter([] as unknown as any))
            .to.throw(TypeError);

        expect(() => removeInvisibleCharacter({} as unknown as any))
            .to.throw(TypeError);

        expect(() => removeInvisibleCharacter(100 as unknown as any))
            .to.throw(TypeError);
    });

    // 转化后返回字符串类型
    it('Should return type of string', () => {
        const normalStr = 'Hello World';
        assert.isString(Helper.removeInvisibleCharacter(normalStr));
    });

    // // 转化后无包含不可见字符原文返回
    it('Should return the same string when uninclude invisible character', () => {
        const normalStr = 'Hello World';
        expect(Helper.removeInvisibleCharacter(normalStr))
            .equal(normalStr);
    });

    // // 转化后返回不包含不可见字符
    it('Should return the right string when the string include invisible character', () => {
        const specialStr = 'djerrahian@​gmail.com';
        const rightStr = 'djerrahian@gmail.com';

        expect(Helper.removeInvisibleCharacter(specialStr))
            .equal(rightStr);
    });
});