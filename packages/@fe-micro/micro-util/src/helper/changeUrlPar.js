"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeUrlPar(destiny, par, value) {
    var pattern = par + '=([^&]*)';
    var replaceText = par + '=' + value;
    if (destiny.match(pattern)) {
        var tmp = '/\\' + par + '=[^&]*/';
        tmp = destiny.replace(eval(tmp), replaceText);
        return (tmp);
    }
    if (destiny.match('[\?]')) {
        return destiny + '&' + replaceText;
    }
    return destiny + '?' + replaceText;
}
exports.default = changeUrlPar;
