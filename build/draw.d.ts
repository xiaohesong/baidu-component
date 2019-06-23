import { IConfigs } from './interface.base';
interface IHandleDrawParams {
    map: any;
    trajectoryShowable: boolean;
    expectShowable: boolean;
    configs: IConfigs;
}
export declare function handleDraw({ map, configs, }: IHandleDrawParams): {
    expecter: (type: string) => void;
    trajectorier: (type: string) => void;
};
export {};
