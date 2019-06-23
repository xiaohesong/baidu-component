'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

// 默认的预估路线的颜色
var defaultExpectColor = '#f5222d';
// 默认的轨迹路线的颜色
var defaultTrajectoryColor = '#1890ff';
var defaultStrokeWeight = 3;
var defaultStrokeOpacity = 0.8;

var baseConfig = {
    // 预估路线相关配置
    center: [120.120716, 30.279077],
    expect: {
        able: true,
        showable: true,
        strokeColor: '#f5222d',
        strokeWeight: 3,
        line: [[120.110311, 30.287103], [120.110468, 30.287115], [120.110662, 30.287127], [120.111029, 30.287139], [120.111597, 30.287249]],
        points: {
            // 订单起点
            expectStart: { point: [120.110311, 30.287103], icon: '0' },
            // 订单终点
            expectEnd: { point: [120.111597, 30.287249], icon: '1' }
        }
    },
    // 轨迹路线相关配置
    trajectory: {
        able: true,
        showable: true,
        strokeColor: '#1890ff',
        strokeWeight: 3,
        line: [[120.120716, 30.279077], [120.121656, 30.279089], [120.122880, 30.279125], [120.124034, 30.279162], [120.124801, 30.279167]],
        points: {
            // 司机接单点
            driverStart: { point: [120.120716, 30.279077], icon: '0' },
            // 司机等等待点
            driverWait: { point: [120.121656, 30.279089], icon: '1' },
            // 乘客上车点
            passengerGetOn: { point: [120.122880, 30.279125], icon: '2' },
            // 订单起点
            start: { point: [120.121656, 30.279089], icon: '3' },
            // 乘客下车点
            passengerGetOff: { point: [120.124034, 30.279162], icon: '4' },
            // 订单终点
            end: { point: [120.124801, 30.279167], icon: '5' }
        }
    },
};
var pointsIcon = {
    expectStart: '预估起点图标',
    expectEnd: '预估终点图标',
    driverStart: '司机接单点图标',
    driverWait: '司机等等待点',
    passengerGetOn: '乘客上车点',
    start: '订单起点',
    passengerGetOff: '乘客下车点',
    end: '订单终点'
};

var colorDesc = {
    'expect': defaultExpectColor,
    'trajectory': defaultTrajectoryColor
};
function handleDraw(_a) {
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

var EXPECT_TYPE = 'expect';
var TRAJECTORY_TYPE = 'trajectory';
function drawMap(props) {
    return __awaiter(this, void 0, void 0, function () {
        var map, trajectoryShowable, expectShowable, configs, _expectable, _trajectoryable, _expectable_, _trajectoryable_, expectable, trajectoryable, centerPosition, point, draw;
        var _a;
        return __generator(this, function (_b) {
            map = props.map, trajectoryShowable = props.trajectoryShowable, expectShowable = props.expectShowable, configs = props.configs;
            _expectable = props.configs.expect.able;
            _trajectoryable = props.configs.trajectory.able;
            _expectable_ = _expectable !== false;
            _trajectoryable_ = _trajectoryable !== false;
            expectable = _expectable_ && expectShowable;
            trajectoryable = _trajectoryable_ && trajectoryShowable;
            centerPosition = configs.center ? configs.center : configs.expect.line[0];
            point = new ((_a = window.BMap.Point).bind.apply(_a, [void 0].concat(centerPosition)))();
            map.centerAndZoom(point, 15);
            map.clearOverlays();
            draw = handleDraw(__assign({}, props, { map: map, expectShowable: expectShowable, trajectoryShowable: trajectoryShowable }));
            if (expectable)
                draw.expecter(EXPECT_TYPE);
            if (trajectoryable)
                draw.trajectorier(TRAJECTORY_TYPE);
            return [2 /*return*/];
        });
    });
}

var AK = 'olqtPciVr8PWFoKFnNWof0j0uIMukGE4';
function loadScript(ak) {
    if (ak === void 0) { ak = AK; }
    if (!window.BMap && !window.mapLoader) {
        return window.mapLoader = new Promise(function (resolve) {
            // changeCsp()
            var script = document.createElement('script');
            script.src = "https://api.map.baidu.com/api?v=2.0.0&ak=" + ak + "&callback=initBMapCallBack";
            document.body.appendChild(script);
            window.initBMapCallBack = function () {
                resolve(window.BMap);
                document.body.removeChild(script);
                // delete window.mapLoader;
                delete window.initBMapCallBack;
            };
        });
    }
    return window.mapLoader;
}
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var map;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadScript()];
                case 1:
                    _a.sent();
                    map = new window.BMap.Map("container");
                    // 创建地图实例  
                    // const point = new window.BMap.Point(...center);
                    // 创建点坐标  
                    // map.centerAndZoom(point, 15);
                    // 初始化地图，设置中心点坐标和地图级别
                    map.enableScrollWheelZoom();
                    return [2 /*return*/, map];
            }
        });
    });
}

var disabledColor = 'rgba(0,0,0,0.25)';
function MapHeadDesc(props) {
    var _a = props.configs.expect, _b = _a.strokeColor, expectColor = _b === void 0 ? defaultExpectColor : _b, _expectable = _a.able, _expectShowable = _a.showable;
    var _c = props.configs.trajectory, _d = _c.strokeColor, trajectoryColo = _d === void 0 ? defaultTrajectoryColor : _d, _trajectoryable = _c.able, _trajectoryShowable = _c.showable;
    var expectable = _expectable !== false;
    var trajectoryable = _trajectoryable !== false;
    var expectShowable = _expectShowable !== false;
    var trajectoryShowable = _trajectoryShowable !== false;
    function toggleExpect() {
        expectable && props.toggleExpect();
    }
    function toggleTrajectory() {
        trajectoryable && props.toggleTrajectory();
    }
    var expectStyle = {
        color: !expectShowable ? disabledColor : '',
        textDecoration: !expectShowable ? 'line-through' : ''
    };
    var trajectoryStyle = {
        color: !trajectoryShowable ? disabledColor : '',
        textDecoration: !trajectoryShowable ? 'line-through' : ''
    };
    var renderContent = React.useCallback(function () {
        return (React.createElement(React.Fragment, null,
            expectable &&
                React.createElement("div", { onClick: toggleExpect, style: expectStyle },
                    "\u9884\u4F30\u8DEF\u7EBF\uFF1A",
                    React.createElement("span", { style: { backgroundColor: expectColor } })),
            trajectoryable &&
                React.createElement("div", { onClick: toggleTrajectory, style: trajectoryStyle },
                    "\u8F68\u8FF9\u8DEF\u7EBF\uFF1A",
                    React.createElement("span", { style: { backgroundColor: trajectoryColo } }))));
    }, [_expectShowable, _trajectoryShowable]);
    return renderContent();
}

var map;
function BMap(props) {
    var _this = this;
    var configs = props.configs || baseConfig;
    var defaultExpectShowable = configs.expect.showable !== false;
    var defaultTrajectoryShowable = configs.trajectory.showable !== false;
    var _a = React.useState(defaultExpectShowable), expectShowable = _a[0], setExpectShowable = _a[1];
    var _b = React.useState(defaultTrajectoryShowable), trajectoryShowable = _b[0], setTrajectoryShowable = _b[1];
    React.useMemo(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            map = init();
            return [2 /*return*/];
        });
    }); }, []);
    // clear side effect when leave
    React.useEffect(function () {
        return function () {
            delete window.mapLoader;
            delete window.BMap;
            map = null;
        };
    }, []);
    React.useEffect(function () {
        map.then(function (_map) {
            drawMap(__assign({}, props, { map: _map, expectShowable: expectShowable, trajectoryShowable: trajectoryShowable }));
        });
    }, [expectShowable, trajectoryShowable]);
    var style = props.style || { width: 500, height: 300 };
    function toggleExpect() {
        setExpectShowable(function (showable) { return !showable; });
    }
    function toggleTrajectory() {
        setTrajectoryShowable(function (showable) { return !showable; });
    }
    configs = __assign({}, configs, { expect: __assign({}, configs.expect, { showable: expectShowable }), trajectory: __assign({}, configs.trajectory, { showable: trajectoryShowable }) });
    return (React.createElement(React.Fragment, null,
        React.createElement(MapHeadDesc, __assign({}, props, { configs: configs, toggleExpect: toggleExpect, toggleTrajectory: toggleTrajectory })),
        React.createElement("div", { id: 'container', style: style })));
}

var index = (function (props) {
    var configs = props.configs || baseConfig;
    return (React.createElement(BMap, { configs: configs }));
});

exports.default = index;
//# sourceMappingURL=index.js.map
