let sessionStorage: Storage;
if (typeof window !== 'undefined') {
    sessionStorage = window.sessionStorage;
}

export class SessionStorage {
    //设置sessionStorage
    public static set(key: string, value: any): void {
        // try {
        if (!sessionStorage) throw new Error('[micro Util] SessionStorage must run in a browser environment!');
        if (!key) throw new Error('Did not set the Unique Key!');
        sessionStorage.setItem(key, JSON.stringify(value));
        // } catch (err) {
        //     throw new Error(`SessionStorage.set error: ${err}`);
        // }
    }

    //获取sessionStorage
    public static get<T>(key: string): T | null {
        // try {
        if (!sessionStorage) throw new Error('[micro Util] SessionStorage must run in a browser environment!');
        if (!key) return null;
        const storeObj = sessionStorage.getItem(key);
        if (storeObj === null) return null;
        return <T>JSON.parse(storeObj);
        // } catch (err) {
        //     throw new Error(`SessionStorage.getItem error: ${err}`);
        // }
    }

    //移除某个sessionStorage
    public static remove(key: string): void {
        // try {
        if (!sessionStorage) throw new Error('[micro Util] SessionStorage must run in a browser environment!');
        sessionStorage.removeItem(key);
        // } catch (err) {
        //     throw new Error(`SessionStorage.removeItem error: ${err}`);
        // }
    }

    //清除sessionStorage
    public static clear(): void {
        sessionStorage && sessionStorage.clear();
    }
}