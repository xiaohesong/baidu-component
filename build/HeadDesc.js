import * as React from 'react';
import { defaultExpectColor, defaultTrajectoryColor } from './constants';
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
export default MapHeadDesc;
//# sourceMappingURL=HeadDesc.js.map