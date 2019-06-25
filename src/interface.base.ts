type IPoints = {
  [name: string]: {
    point: any,
    icon: any
  }
}

export type IConfigs = {
  center?: number[],
  headerable?: boolean
  expect: {
    able?: boolean,
    showable?: boolean,
    strokeColor?: string,
    strokeWeight?: number,
    strokeOpacity?: number,
    line: any,
    points: IPoints
  },
  trajectory: {
    able?: boolean,
    showable?: boolean,
    strokeColor?: string,
    strokeWeight?: number,
    strokeOpacity?: number,
    line: any,
    points: IPoints
  },
  [key: string]: any
}

export let baseConfig = {
  // 预估路线相关配置
  center: [120.120716, 30.279077], // options
  // 点击地图标记的弹窗
  infoWindow: {
    able: true,
    width: 240,     // 信息窗口宽度
    height: 120,
  },
  expect: {
    able: true, // 是否开启预估路线
    showable: true, // 动态控制显示线路
    strokeColor: '#f5222d',
    strokeWeight: 3,
    line: [[120.110311, 30.287103], [120.110468, 30.287115], [120.110662, 30.287127], [120.111029, 30.287139], [120.111597, 30.287249]],
    points: {
      // 订单起点
      expectStart: { point: [120.110311, 30.287103], icon: '0', desc: '预估订单起点' },
      // 订单终点
      expectEnd: { point: [120.111597, 30.287249], icon: '1', desc: '预估订单起点' }
    }
  },
  // 轨迹路线相关配置
  trajectory: {
    able: true, // 是否开启轨迹路线
    showable: true,
    strokeColor: '#1890ff',
    strokeWeight: 3,
    line: [[120.120716, 30.279077], [120.121656, 30.279089], [120.122880, 30.279125], [120.124034, 30.279162], [120.124801, 30.279167]],
    points: {
      // 司机接单点
      driverStart: { point: [120.120716, 30.279077], icon: '0', dateTime: '', desc: '司机接单点' },
      // 司机等待点
      driverWait: { point: [120.121656, 30.279089], icon: '1', dateTime: '', desc: '司机等待点' },
      // 乘客上车点
      passengerGetOn: { point: [120.122880, 30.279125], icon: '2', dateTime: '', desc: '乘客上车点' },
      // 订单起点
      start: { point: [120.121656, 30.279089], icon: '3', dateTime: '', desc: '订单起点' },
      // 乘客下车点
      passengerGetOff: { point: [120.124034, 30.279162], icon: '4', dateTime: '', desc: '乘客下车点' },
      // 订单终点(发起收款点)
      end: { point: [120.124801, 30.279167], icon: '5', dateTime: '', desc: '订单终点(发起收款)' }
    }
  },
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