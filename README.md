<h1 align="center">Welcome to baidu-component 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.2-blue.svg?cacheSeconds=2592000" />
</p>

> baidu component for react, just polyline marker

## Install

```sh
npm i -S baidu-component
```

## Useage
```jsx
import BMap from 'baidu-component'

function Map() {
  return(
    <BMap ak={yourAK} style={width: 460, height: 320} configs={yourConfigs} />
  )
}
```

## Configable

看下面的配置：

```js
export let baseConfig = {
  // 预估路线相关配置
  headable: true, // 地图上方的描述信息
  eventType: 'click', // 地图上图标对应的事件
  center: [120.120716, 30.279077], // 中心点
  // 点击地图标记的弹窗
  infoWindow: {
    able: true, //是否启用此功能，默认为启用
    width: 240,     // 信息窗口宽度
    height: 120,
  },
  // 线路
  lines: {
    // 线路1，名字可自取
    line1: {
      able: true, // 是否开启此路线
      showable: true, // 动态控制显示线路
      strokeColor: '#f5222d', // 线条颜色
      strokeWeight: 3, // 线条宽度
      desc: '线条1', // 对线的描述
      line: [[120.110311, 30.287103], [120.110468, 30.287115], [120.110662, 30.287127], [120.111029, 30.287139], [120.111597, 30.287249]], // 坐标点连成的线
      // 打标记的点
      points: {
        // 点1
        point1: { 
          point: [120.110311, 30.287103], 
          icon: '0', // 对应点的图标
          desc: '这个是点1', // 如果没有值，就不显示。
          dateTime: '' //如果没有值，那就不显示 
        },
      }
    },
  }
  
}
```

**配置太多？** 这个大多是默认配置是这样的，你可以只简单的配置如下：

```js
let baseConfig = {
  // 线路
  lines: {
    // 线路1，名字可自取
    line1: {
      desc: '线条1', // 对线的描述
      line: [[120.110311, 30.287103], [120.110468, 30.287115], [120.110662, 30.287127], [120.111029, 30.287139], [120.111597, 30.287249]], // 坐标点连成的线
      // 打标记的点
      points: {
        // 点1
        point1: { 
          point: [120.110311, 30.287103], 
          icon: '0', // 对应点的图标
          desc: '这个是点1', // 如果没有值，就不显示。
          dateTime: '' //如果没有值，那就不显示 
        },
      }
    },
  }
}
```

这样就是简单的画一条线的效果。 下面是一些配置的介绍：
- ak

  这个就是加载地图需要的那个ak秘钥了。[获取ak](https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey)

- center (optional)
  
  这个是可选的，用于初次加载地图的中心店。若不配置，则将根据预估路线进行定位。

- headable （optional）

  这个是控制是否显示地图上方的描述信息，默认为显示，`false`为不显示。

- eventType (optional)

  这个是在地图上对应的标记的事件，默认为`mouseover`，可自行设置。

- infoWindow (optional)

  这个是点击地图图标的时候弹窗，里面可对窗体进行配置。具体看CHANGE_LOG。

  可以传入的信息：[InfoWindowOptions](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8)

- lines( **required** )

  这个是路线集的配置。支持配置多条线路，线路名称可以自定义。但是每个名称内部需`desc`来说明此线路，用于地图上方的描述。

  下面的属性是针对预估路线展示的配置。

  - desc ( **required** )
  
    对于线路的描述，在地图上方的展示里用作label。

  - able (optional)
  
    这个是表明是否开启预估路线的显示，默认是开启， false 则不开启。

  - showable （optional）

    这个是表面是否在地图上展示该路线，默认是开启的， false 则不展示

  - strokeColor (optional)

    这个是显示的路线的颜色，默认是 #1890ff 。

  - strokeWeight (optional)

    表示显得的路线的宽度，默认是 3 。

  - strokeOpacity （optional）
  
    表示路线的透明度。默认是 0.8 。 

- line ( **requred** )

  这个是对应的线的经纬度点，由一个二维数组组成。就是在地图上画出来的线。

  [[x, y], [x2, y2], ...]

- points ( **requred** )

  这个表示对应的点的标记，里面是一个对象，可以定义图标。

  ```js
  points: {
    point1: { point: [120.110311, 30.287103], icon: '0', desc: '这个点是p1', dateTime: '2019-06-30 19:28:23' },
    point2: { point: [120.111597, 30.287249], icon: '1', desc: '这个点是p2', dateTime: '2019-06-30 19:38:23' }
  }
  ```
  - point1

    点的名称，可自己定义。

    - point( **required** )
      
      对应的点的坐标

    - icon ( **required** )
      
      对应的图标。

    - desc (optional)

      这个是对应的点的描述，在地图上点击图标的时候，弹窗里显示的。
    
    - dateTime (optional)

      这个就是时间了。

接下来还可以定义其他的线路，必须实际轨迹，按照同样的逻辑进行添加就可以了。

所以本文开头部分的一大截配置，真正需要的 只有 line 和 points 。

## Feature

- [x] polyline
- [x] toggle
- [x] custom point icon
- [x] custom point
- [x] custom polyline(color, width, ...)
- [x] use own `ak`
- [x] custom line

## Author

👤 **xiaohesong**

* Twitter: [@xiaohesong](https://twitter.com/xiaohesong)
* Github: [@baidu-component](https://github.com/baidu-component)

## Show your support

Give a ⭐️ if this project helped you !

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_