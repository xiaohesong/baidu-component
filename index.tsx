import * as React from 'react';
import BMap from './src';
import { baseConfig, IConfigs } from './src/interface.base';

interface IProps {
  configs: IConfigs
}
export default (props: IProps) => {
  let configs = props.configs || baseConfig

  return(
    <BMap configs={configs} />
  )
}