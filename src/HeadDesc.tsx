import * as React from 'react';
import { IBMapProps } from './';
import './index.css';
import { defaultColor } from './constants';

const disabledColor = 'rgba(0,0,0,0.25)'

interface MapHeadDesc extends IBMapProps {
  toggle: (name: string) => void,
  showables: { [propName: string]: boolean },
}

function MapHeadDesc(props: MapHeadDesc) {
  
  const { configs: { lines }, showables } = props
  const toggle = (e: any) => {
    const { id: lineName } = e.target
    lineName && props.toggle(lineName)
  }

  const renderContent = React.useCallback(() => {
    return (
      <div onClick={toggle} >
        {
          Object.keys(lines).map((key: string) => {
            const lineable = lines[key].able !== false
            const { desc, strokeColor = defaultColor} = lines[key]
            const showable = showables[key]
            const style = {
              color: !showable ? disabledColor : '',
              textDecoration: !showable ? 'line-through' : ''
            }

            return lineable && <div id={key} key={key} className='lineDesc' style={style}>
              {desc}：<span style={{ backgroundColor: strokeColor }}></span>
            </div>
          })
        }
      </div>
    )
  }, [showables])

  return renderContent()
}

export default MapHeadDesc