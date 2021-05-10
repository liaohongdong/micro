"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function copyText(text) {
    return new Promise(function (resolve, reject) {
        if (text && (typeof text === 'number' || typeof text === 'string')) {
            text = String(text);
            var oInput = void 0;
            if (document.querySelector('.oInput')) {
                oInput = document.querySelector('.oInput');
                oInput.style.display = 'block';
            }
            else {
                oInput = document.createElement('input');
                document.body.appendChild(oInput);
                oInput.className = 'oInput';
            }
            oInput.value = text;
            oInput.select();
            document.execCommand('copy');
            oInput.style.display = 'none';
            resolve(text);
        }
        else {
            reject('The parameter must be Number or String.');
        }
    });
}
exports.default = copyText;
