declare const url: {
    /**
     * 获取url参数
     * @param {string} - name
     * @param {string} - url
     * @returns {string}
     * @example
     * getParamByName("a", "http://www.baidu.com?a=1&b=aaa") // "1"
     * @example
     * getParamByName("b", "http://www.baidu.com?a=1&b=aaa") // "aaa"
     * @example
     * getParamByName("c", "http://www.baidu.com?a=1&b=aaa") //""
     * @example
     * getParamByName("c") // "ccc"
     */
    getParamByName(name: string, url?: string): string;
    /**
     * 解析url
     * @param {string} - url
     * @returns {Object}
     * @example
     * parseQueryString("http://www.baidu.com?a=1&b=aaa") // {a:'1',b:'aaa'}
     */
    parseQueryString(url?: string | undefined): Object;
};
export default url;
export declare const getParamByName: (name: string, url?: string) => string;
export declare const parseQueryString: (url?: string | undefined) => Object;
