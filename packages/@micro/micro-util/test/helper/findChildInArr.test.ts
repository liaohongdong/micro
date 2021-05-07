import chai from 'chai';
import { Helper, } from '../../index';
import path from '../json/path.json';

describe('#findChildInArr Function', () => {
    it('Should return type of object', () => {
        chai.expect(Helper.findChildInArr(path, '/goods/attribute/attributeList', 'path', true)).to.deep.equal({
            root: {
                icon: 'iconfont icon-sidebar-commodity',
                id: 1,
                name: '商品',
                path: '/goods',
                children: [
                    {
                        'icon': 'iconfont iconicon_secret',
                        'id': 270228,
                        'name': '分类管理',
                        'path': '/goods/Categories/Categories',
                    },
                    {
                        'icon': 'iconfont iconicon_QRcode',
                        'id': 270229,
                        'name': '属性管理',
                        'path': '/goods/attribute/attributeList',
                    }],
            },
            item: {
                icon: 'iconfont iconicon_QRcode',
                id: 270229,
                name: '属性管理',
                path: '/goods/attribute/attributeList',
            },
        });
    });
    it('Should throw new Error', ()=>{
        chai.assert.throws(() => Helper.findChildInArr(null, '/goods/attribute/attributeList', 'path', true), Error, 'Array must be an array!');
    });
    it('Should throw new TypeError', ()=>{
        chai.assert.throws(() => Helper.findChildInArr(path, null, 'path', true), TypeError, 'Value must not be null!');
    });
});