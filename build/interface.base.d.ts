declare type IPoints = {
    [name: string]: {
        point: any;
        icon: any;
    };
};
export declare type IConfigs = {
    center?: number[];
    headerable?: boolean;
    expect: {
        able?: boolean;
        showable?: boolean;
        strokeColor?: string;
        strokeWeight?: number;
        strokeOpacity?: number;
        line: any;
        points: IPoints;
    };
    trajectory: {
        able?: boolean;
        showable?: boolean;
        strokeColor?: string;
        strokeWeight?: number;
        strokeOpacity?: number;
        line: any;
        points: IPoints;
    };
    [key: string]: any;
};
export declare let baseConfig: {
    center: number[];
    expect: {
        able: boolean;
        showable: boolean;
        strokeColor: string;
        strokeWeight: number;
        line: number[][];
        points: {
            expectStart: {
                point: number[];
                icon: string;
            };
            expectEnd: {
                point: number[];
                icon: string;
            };
        };
    };
    trajectory: {
        able: boolean;
        showable: boolean;
        strokeColor: string;
        strokeWeight: number;
        line: number[][];
        points: {
            driverStart: {
                point: number[];
                icon: string;
            };
            driverWait: {
                point: number[];
                icon: string;
            };
            passengerGetOn: {
                point: number[];
                icon: string;
            };
            start: {
                point: number[];
                icon: string;
            };
            passengerGetOff: {
                point: number[];
                icon: string;
            };
            end: {
                point: number[];
                icon: string;
            };
        };
    };
};
declare type TPositionIcon = {
    [key: string]: any;
};
export declare const pointsIcon: TPositionIcon;
export {};
