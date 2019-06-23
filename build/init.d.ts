declare global {
    interface Window {
        AMap: any;
        BMap: any;
        initBMapCallBack: any;
        mapLoader: any;
    }
}
export declare function init(): Promise<any>;
