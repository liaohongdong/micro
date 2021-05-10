interface StorageStore<T> {
    data: T;
    expires: number;
}

let localStorage: Storage;
if (typeof window !== 'undefined') {
    localStorage = window.localStorage;
}

export class LocalStorage {
    // 设置localStorage
    public static set<U>(key: string, value: U, expires?: number): void {
        // try {
        if (!localStorage) throw new Error('[micro Util] LocalStorage must run in a browser environment!');
        if (!key) throw new Error('Did not set the Unique Key!');
        const storeObj: StorageStore<U> = {
            data: value,
            expires: expires ? Date.now() + expires : 0, //expires单位为毫秒数
        };
        localStorage.setItem(key, JSON.stringify(storeObj));
        // } catch (err) {
        //     throw new Error(`LocalStorage.set error: ${err}`);
        // }
    }

    //获取localStorage
    public static get<V>(key: string): V | null {
        // try {
        if (!localStorage) throw new Error('[micro Util] LocalStorage must run in a browser environment!');
        if (!key) return null;
        const value = localStorage.getItem(key);
        if (value === null) return null;
        const storeObj: StorageStore<V> = <StorageStore<V>>JSON.parse(value);
        if (!storeObj.expires) return <V>storeObj.data;
        if (storeObj.expires <= Date.now()) {
            localStorage.removeItem(key);
            return null;
        }
        return <V>storeObj.data;
        // } catch (err) {
        //     throw new Error(`LocalStorage.getItem error: ${JSON.stringify(err)}`);
        // }
    }

    //移除某个localStorage
    public static remove(key: string): void {
        // try {
        if (!localStorage) throw new Error('[micro Util] LocalStorage must run in a browser environment!');
        localStorage.removeItem(key);
        // } catch (err) {
        //     throw new Error(`LocalStorage.removeItem error: ${err}`);
        // }
    }

    //清除localStorage
    public static clear(): void {
        localStorage && localStorage.clear();
    }
}