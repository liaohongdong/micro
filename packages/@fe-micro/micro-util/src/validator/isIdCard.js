"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TypeError_1 = require("../error-handle/TypeError");
var isEmpty_1 = __importDefault(require("./isEmpty"));
var FILE_PATH = 'Validator';
function isIdCard(code) {
    TypeError_1.typeErrorHandle(code, 'string', FILE_PATH);
    var CITY;
    (function (CITY) {
        CITY[CITY["\u5317\u4EAC"] = 11] = "\u5317\u4EAC";
        CITY[CITY["\u5929\u6D25"] = 12] = "\u5929\u6D25";
        CITY[CITY["\u6CB3\u5317"] = 13] = "\u6CB3\u5317";
        CITY[CITY["\u5C71\u897F"] = 14] = "\u5C71\u897F";
        CITY[CITY["\u5185\u8499\u53E4"] = 15] = "\u5185\u8499\u53E4";
        CITY[CITY["\u8FBD\u5B81"] = 21] = "\u8FBD\u5B81";
        CITY[CITY["\u5409\u6797"] = 22] = "\u5409\u6797";
        CITY[CITY["\u9ED1\u9F99\u6C5F"] = 23] = "\u9ED1\u9F99\u6C5F";
        CITY[CITY["\u4E0A\u6D77"] = 31] = "\u4E0A\u6D77";
        CITY[CITY["\u6C5F\u82CF"] = 32] = "\u6C5F\u82CF";
        CITY[CITY["\u6D59\u6C5F"] = 33] = "\u6D59\u6C5F";
        CITY[CITY["\u5B89\u5FBD"] = 34] = "\u5B89\u5FBD";
        CITY[CITY["\u798F\u5EFA"] = 35] = "\u798F\u5EFA";
        CITY[CITY["\u6C5F\u897F"] = 36] = "\u6C5F\u897F";
        CITY[CITY["\u5C71\u4E1C"] = 37] = "\u5C71\u4E1C";
        CITY[CITY["\u6CB3\u5357"] = 41] = "\u6CB3\u5357";
        CITY[CITY["\u6E56\u5317"] = 42] = "\u6E56\u5317";
        CITY[CITY["\u6E56\u5357"] = 43] = "\u6E56\u5357";
        CITY[CITY["\u5E7F\u4E1C"] = 44] = "\u5E7F\u4E1C";
        CITY[CITY["\u5E7F\u897F"] = 45] = "\u5E7F\u897F";
        CITY[CITY["\u6D77\u5357"] = 46] = "\u6D77\u5357";
        CITY[CITY["\u91CD\u5E86"] = 50] = "\u91CD\u5E86";
        CITY[CITY["\u56DB\u5DDD"] = 51] = "\u56DB\u5DDD";
        CITY[CITY["\u8D35\u5DDE"] = 52] = "\u8D35\u5DDE";
        CITY[CITY["\u4E91\u5357"] = 53] = "\u4E91\u5357";
        CITY[CITY["\u897F\u85CF"] = 54] = "\u897F\u85CF";
        CITY[CITY["\u9655\u897F"] = 61] = "\u9655\u897F";
        CITY[CITY["\u7518\u8083"] = 62] = "\u7518\u8083";
        CITY[CITY["\u9752\u6D77"] = 63] = "\u9752\u6D77";
        CITY[CITY["\u5B81\u590F"] = 64] = "\u5B81\u590F";
        CITY[CITY["\u65B0\u7586"] = 65] = "\u65B0\u7586";
        CITY[CITY["\u53F0\u6E7E"] = 71] = "\u53F0\u6E7E";
        CITY[CITY["\u9999\u6E2F"] = 81] = "\u9999\u6E2F";
        CITY[CITY["\u6FB3\u95E8"] = 82] = "\u6FB3\u95E8";
        CITY[CITY["\u56FD\u5916"] = 91] = "\u56FD\u5916";
    })(CITY || (CITY = {}));
    if (!isEmpty_1.default(code)) {
        if (code.length === 18) {
            if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
                return false;
            }
            else if (!CITY[Number(code.substr(0, 2))]) {
                return false;
            }
            var codeArr = code.split('');
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            var parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2', 'x'];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = Number(codeArr[i]);
                wi = factor[i];
                sum += ai * wi;
            }
            if (parity[sum % 11] !== codeArr[17]) {
                return false;
            }
            return true;
        }
        return false;
    }
    return false;
}
exports.default = isIdCard;
