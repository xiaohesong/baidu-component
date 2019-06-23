import {
  defaultExpectColor,
  defaultTrajectoryColor,
  defaultStrokeWeight,
  defaultStrokeOpacity
} from './constants';
import { IConfigs, pointsIcon } from './interface.base';

interface IColorDesc {
  expect: string,
  trajectory: string,
  [key: string]: string
}

const colorDesc: IColorDesc = {
  'expect': defaultExpectColor,
  'trajectory': defaultTrajectoryColor
}

interface IHandleDrawParams {
  map: any,
  trajectoryShowable: boolean,
  expectShowable: boolean,
  configs: IConfigs
}

type TlineConfigs = {
  strokeColor: string,
  strokeWeight: number,
  strokeOpacity: number
}
export function handleDraw({
  map,
  configs,
}: IHandleDrawParams) {

  function addMarker(points: any) {
    const keys = Object.keys(points)
    keys.forEach((key: string) => {
      const { point, icon } = points[key]

      const cIcon = new window.BMap.Icon(icon || pointsIcon[key], new window.BMap.Size(23, 25), {})
      const cPoint = new window.BMap.Point(point.shift(), point.pop())
      const marker = new window.BMap.Marker(cPoint, { icon: cIcon });
      map.addOverlay(marker);
    })
  }

  function drawPolyline(line: any, points: any, lineConfigs: TlineConfigs) {
    let rePoints: any = [];

    JSON.parse(JSON.stringify(line)).forEach((position: number[]) => {
      rePoints.push(new window.BMap.Point(position.shift(), position.pop()))
    })

    addMarker(JSON.parse(JSON.stringify(points)))

    var polyline = new window.BMap.Polyline(rePoints,
      { strokeColor: lineConfigs.strokeColor, strokeWeight: lineConfigs.strokeWeight, strokeOpacity: lineConfigs.strokeOpacity }
    );

    map.addOverlay(polyline);
  }

  function expecter(type: string) {
    drawer(type)
  }

  function trajectorier(type: string) {
    drawer(type)
  }

  function drawer(type: string) {
    let {
      line,
      points,
      strokeColor = colorDesc[type],
      strokeWeight = defaultStrokeWeight,
      strokeOpacity = defaultStrokeOpacity
    } = configs[type]

    const lineConfigs = { strokeColor, strokeWeight, strokeOpacity }
    drawPolyline(line, points, lineConfigs)
  }

  return {
    expecter,
    trajectorier
  }

}