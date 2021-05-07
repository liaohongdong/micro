export class Filter {
    static searchListAllByVal<T>(filterVal: string | number, list: any[], props?: string[]): any[] {
        if (!Array.isArray(list) || !list.length) {
            throw new TypeError('List must be an not-empty array! (Filter.js)');
        }

        let _props: string[] = props || [];

        if (!_props || !_props.length) {
            _props = Object.keys(list[0]);
        }

        if (filterVal) {
            const toStrAndTrim = (val: T): string => `${val}`.trim();

            return list.filter((item: any) =>
                _props.some((key: string) => {
                    const str: string = toStrAndTrim(item[key]);
                    return str.indexOf(filterVal.toString()) > -1;
                })
            );
        }
        return list;
    }
}
