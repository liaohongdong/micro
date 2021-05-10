import { LocalStorage, SessionStorage } from '../storage';

/**
 * 退出登录
 */
function logout() {
    LocalStorage.clear();
    SessionStorage.clear();
}

export {
    logout
}