type IPoints = {
  [name: string]: {
    point: any,
    icon?: any
    dateTime?: string,
    desc?: string,
  }
}

interface ILineConfig {
  desc: string,
  line: any,
  points: IPoints
  showable?: boolean
  able?: boolean
  strokeColor?: string,
  strokeWeight?: number,
  strokeOpacity?: number,
}

export type IConfigs = {
  center?: number[],
  headerable?: boolean
  infoWindow?: any
  lines: {
    [key: string]: ILineConfig
  }
}

type TPositionIcon = {
  [key: string]: any
}

export const pointsIcon: TPositionIcon = {
  expectStart: { icon: '预估起点图标', dateTime: '', desc: '预估订单起点' },
  expectEnd: { icon: '预估终点图标', dateTime: '', desc: '预估订单终点' },
  driverStart: { icon: '司机接单点图标', dateTime: '', desc: '司机接单点' },
  driverWait: { icon: '司机等待点', dateTime: '', desc: '司机等待点' },
  passengerGetOn: { icon: '乘客上车点', dateTime: '', desc: '乘客上车点' },
  start: { icon: '订单起点', dateTime: '', desc: '订单起点' },
  passengerGetOff: { icon: '乘客下车点', dateTime: '', desc: '乘客下车点' },
  end: { icon: '订单终点', dateTime: '', desc: '订单终点(发起收款)' }
}