/// <reference types="react" />
import { IBMapProps } from './';
interface MapHeadDesc extends IBMapProps {
    toggleExpect: () => void;
    toggleTrajectory: () => void;
}
declare function MapHeadDesc(props: MapHeadDesc): JSX.Element;
export default MapHeadDesc;
