import {
  defaultColor,
  defaultStrokeWeight,
  defaultStrokeOpacity
} from './constants';
import { IConfigs, pointsIcon as defaultPoints } from './interface.base';

interface IHandleDrawParams {
  map: any,
  showables: { [propName: string]: boolean },
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
  const infoWindowable = configs.infoWindow ? configs.infoWindow.able !== false : true

  function infoShow(marker: any, defaultItem: any) {
    const point = marker.getPosition();
    const { dateTime: time = '', title } = defaultItem
    let infoWindow = new window.BMap.InfoWindow(`<div>
      <p class='mb2'><span class='pr10'>经度:</span><span>${point.lng}</span></p>
      <p class='mb2'><span class='pr10'>维度:</span><span>${point.lat}</span></p>
      ${time && `<p class='mb2'><span class='pr10'>时间:</span><span>${time}</span></p>`}
    </div>`, { ...configs.infoWindow, title });  // 创建信息窗口对象 
    marker.openInfoWindow(infoWindow)
  }

  function addMarker(points: any) {
    const keys = Object.keys(points)
    keys.forEach((key: string) => {
      const { point, icon, dateTime: time, desc: title } = points[key]
      let defaultItem = defaultPoints[key]
      defaultItem = { ...defaultItem, dateTime: time, title }
      const cIcon = new window.BMap.Icon(icon, new window.BMap.Size(23, 25), {})
      const cPoint = new window.BMap.Point(point.shift(), point.pop())
      const marker = new window.BMap.Marker(cPoint, { icon: cIcon });

      infoWindowable && marker.addEventListener("click", () => infoShow(marker, defaultItem));
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

  function drawer(type: string) {
    let {
      line = [],
      points = {},
      strokeColor = defaultColor,
      strokeWeight = defaultStrokeWeight,
      strokeOpacity = defaultStrokeOpacity
    } = configs.lines[type] || {}

    const lineConfigs = { strokeColor, strokeWeight, strokeOpacity }
    drawPolyline(line, points, lineConfigs)
  }

  return drawer

}