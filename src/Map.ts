import { IBMapProps } from './';
import { handleDraw } from './draw';

const FIRST_POSITION = 0;

interface IDrawProps extends IBMapProps{
  showables: { [propName: string]: boolean },
  map: any
}

export async function drawMap(props: IDrawProps) {
  let { map, showables, configs, configs: {lines}} = props

  const firstPosition = lines[Object.keys(lines)[FIRST_POSITION]].line[FIRST_POSITION]
  const centerPosition = configs.center ? configs.center : firstPosition
  var point = new window.BMap.Point(...centerPosition);
  
  map.centerAndZoom(point, 15);
  map.clearOverlays()

  const draw = handleDraw({ ...props, map, showables })

  for(let key in showables){
    const abler = showables[key] && lines[key].able !== false
    if(abler) draw(key);
  }
  
}

