"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadStyle = void 0;
var loadStyle = function (url) {
    if (!window || !document) {
        throw TypeError('[Reference Error] Please run loadStyle in a browser environment!');
    }
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
};
exports.loadStyle = loadStyle;
