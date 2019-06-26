import * as React from 'react';
import { drawMap } from './Map';
import { init } from './init';
import HeadDesc from './HeadDesc';
import { IConfigs, baseConfig, fakeConfig } from './interface.base';

export interface IBMapProps {
  style?: any,
  children?: JSX.Element[] | JSX.Element,
  configs: IConfigs,
}

let map: any;

function BMap(props: IBMapProps) {
  let configs = props.configs || baseConfig
  if (!configs.expect || !configs.expect.line) configs.expect = fakeConfig.expect
  if (!configs.trajectory || !configs.trajectory.line) configs.trajectory = fakeConfig.trajectory


  const defaultExpectShowable = configs.expect.showable !== false
  const defaultTrajectoryShowable = configs.trajectory.showable !== false

  const [expectShowable, setExpectShowable] = React.useState(defaultExpectShowable)
  const [trajectoryShowable, setTrajectoryShowable] = React.useState(defaultTrajectoryShowable)

  React.useMemo(async () => {
    map = init()
  }, [])


  // clear side effect when leave
  React.useEffect(() => {
    return () => {
      delete window.mapLoader;
      delete window.BMap
      map = null
    }
  }, [])

  React.useEffect(() => {
    map.then((_map: any) => {
      drawMap({ ...props, map: _map, expectShowable, trajectoryShowable })
    })
  }, [expectShowable, trajectoryShowable])

  const style = props.style || { width: 500, height: 300 }

  function toggleExpect() {
    setExpectShowable(showable => !showable)
  }

  function toggleTrajectory() {
    setTrajectoryShowable(showable => !showable)
  }

  return (
    <>
      <HeadDesc 
        {...props} 
        expectShowable={expectShowable}
        trajectoryShowable={trajectoryShowable}
        toggleExpect={toggleExpect} 
        toggleTrajectory={toggleTrajectory} 
      />
      <div id='container' style={style}>

      </div>
    </>
  )
}

export default BMap