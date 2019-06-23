import { defaultExpectColor, defaultTrajectoryColor, defaultStrokeWeight, defaultStrokeOpacity } from './constants';
import { pointsIcon } from './interface.base';
var colorDesc = {
    'expect': defaultExpectColor,
    'trajectory': defaultTrajectoryColor
};
export function handleDraw(_a) {
    var map = _a.map, configs = _a.configs;
    function addMarker(points) {
        var keys = Object.keys(points);
        keys.forEach(function (key) {
            var _a = points[key], point = _a.point, icon = _a.icon;
            var cIcon = new window.BMap.Icon(icon || pointsIcon[key], new window.BMap.Size(23, 25), {});
            var cPoint = new window.BMap.Point(point.shift(), point.pop());
            var marker = new window.BMap.Marker(cPoint, { icon: cIcon });
            map.addOverlay(marker);
        });
    }
    function drawPolyline(line, points, lineConfigs) {
        var rePoints = [];
        JSON.parse(JSON.stringify(line)).forEach(function (position) {
            rePoints.push(new window.BMap.Point(position.shift(), position.pop()));
        });
        addMarker(JSON.parse(JSON.stringify(points)));
        var polyline = new window.BMap.Polyline(rePoints, { strokeColor: lineConfigs.strokeColor, strokeWeight: lineConfigs.strokeWeight, strokeOpacity: lineConfigs.strokeOpacity });
        map.addOverlay(polyline);
    }
    function expecter(type) {
        drawer(type);
    }
    function trajectorier(type) {
        drawer(type);
    }
    function drawer(type) {
        var _a = configs[type], line = _a.line, points = _a.points, _b = _a.strokeColor, strokeColor = _b === void 0 ? colorDesc[type] : _b, _c = _a.strokeWeight, strokeWeight = _c === void 0 ? defaultStrokeWeight : _c, _d = _a.strokeOpacity, strokeOpacity = _d === void 0 ? defaultStrokeOpacity : _d;
        var lineConfigs = { strokeColor: strokeColor, strokeWeight: strokeWeight, strokeOpacity: strokeOpacity };
        drawPolyline(line, points, lineConfigs);
    }
    return {
        expecter: expecter,
        trajectorier: trajectorier
    };
}
//# sourceMappingURL=draw.js.map