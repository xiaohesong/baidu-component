import * as React from 'react';
import { drawMap } from './Map';
import { init } from './init';
import HeadDesc from './HeadDesc';
import { IConfigs } from './interface.base';

export interface IBMapProps {
  style?: any,
  children?: JSX.Element[] | JSX.Element,
  configs: IConfigs,
}

let map: any;

function BMap(props: IBMapProps) {
  let { configs } = props
  const linesShowable = Object.keys(configs.lines).reduce((obj: any, key: string) => {
    obj[key] = configs.lines[key].showable !== false
    return obj
  }, {})

  const [showables, setShowables] = React.useState(linesShowable)

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
      drawMap({ ...props, map: _map, showables })
    })
  }, [showables])

  const style = props.style || { width: 500, height: 300 }

  const toggle = (key: string) => {
    setShowables((ables: { [propName: string]: boolean }) => ({
      ...ables,
      [key]: !ables[key]
    }))
  }

  const headable = configs.headerable !== false
  const Header = () => headable ? <HeadDesc
    {...props}
    showables={showables}
    toggle={toggle}
  /> : null

  return (
    <>
      <Header />
      <div id='container' style={style}>

      </div>
    </>
  )
}

export default BMap