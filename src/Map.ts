import { IBMapProps } from './';
import { handleDraw } from './draw';

const EXPECT_TYPE = 'expect';
const TRAJECTORY_TYPE = 'trajectory';

interface IDrawProps extends IBMapProps {
  trajectoryShowable: boolean,
  expectShowable: boolean,
  map: any
}

export async function drawMap(props: IDrawProps) {
  let { map, trajectoryShowable, expectShowable, configs } = props
  const { able: _expectable, } = props.configs.expect
  const { able: _trajectoryable, } = props.configs.trajectory

  const _expectable_ = _expectable !== false
  const _trajectoryable_ = _trajectoryable !== false
  const expectable = _expectable_ && expectShowable
  const trajectoryable = _trajectoryable_ && trajectoryShowable

  const centerPosition = configs.center ? configs.center : configs.expect.line[0]
  var point = new window.BMap.Point(...centerPosition);

  map.centerAndZoom(point, 15);
  map.clearOverlays()

  const draw = handleDraw({ ...props, map, expectShowable, trajectoryShowable })

  if (expectable) draw.expecter(EXPECT_TYPE);
  if (trajectoryable) draw.trajectorier(TRAJECTORY_TYPE);

}

