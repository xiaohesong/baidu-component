import { IBMapProps } from './';
interface IDrawProps extends IBMapProps {
    trajectoryShowable: boolean;
    expectShowable: boolean;
    map: any;
}
export declare function drawMap(props: IDrawProps): Promise<void>;
export {};
