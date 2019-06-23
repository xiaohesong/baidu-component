/// <reference types="react" />
import { IConfigs } from './interface.base';
export interface IBMapProps {
    style?: any;
    children?: JSX.Element[] | JSX.Element;
    configs: IConfigs;
}
declare function BMap(props: IBMapProps): JSX.Element;
export default BMap;
