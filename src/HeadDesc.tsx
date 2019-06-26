import * as React from 'react';
import { defaultExpectColor, defaultTrajectoryColor } from './constants';
import { IBMapProps } from './';

import './index.css';

const disabledColor = 'rgba(0,0,0,0.25)'

interface MapHeadDesc extends IBMapProps {
  toggleExpect: () => void,
  toggleTrajectory: () => void,
  trajectoryShowable: boolean,
  expectShowable: boolean
}

function MapHeadDesc(props: MapHeadDesc) {
  const { 
    strokeColor: expectColor = defaultExpectColor, 
    able: _expectable = true, 
  } = props.configs.expect || {}

  const { 
    strokeColor: trajectoryColo = defaultTrajectoryColor, 
    able: _trajectoryable = true, 
  } = props.configs.trajectory || {}

  const expectable = _expectable !== false
  const trajectoryable = _trajectoryable !== false

  const { expectShowable, trajectoryShowable } = props

  function toggleExpect() {
    expectable && props.toggleExpect()
  }

  function toggleTrajectory() {
    trajectoryable && props.toggleTrajectory()
  }

  const expectStyle = {
    color: !expectShowable ? disabledColor : '', 
    textDecoration: !expectShowable ? 'line-through' : ''
  }

  const trajectoryStyle = {
    color: !trajectoryShowable ? disabledColor : '',
    textDecoration: !trajectoryShowable ? 'line-through' : ''
  }

  const renderContent = React.useCallback(() => {
    return (
      <>
        {
          expectable &&
          <div className='lineDesc' onClick={toggleExpect} style={expectStyle}>
            预估路线：<span style={{ backgroundColor: expectColor }}></span>
          </div>
        }
        {
          trajectoryable &&
          <div className='lineDesc' onClick={toggleTrajectory} style={trajectoryStyle}>
            轨迹路线：<span style={{ backgroundColor: trajectoryColo }}></span>
          </div>
        }
      </>
    )
  }, [expectShowable, trajectoryShowable])

  return renderContent()
}

export default MapHeadDesc