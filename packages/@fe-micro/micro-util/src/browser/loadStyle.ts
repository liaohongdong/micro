export const loadStyle = (url: string): void => {
    if (!window || !document) {
        throw TypeError('[Reference Error] Please run loadStyle in a browser environment!');
    }
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
};