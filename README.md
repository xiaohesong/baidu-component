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
    <BMap />
  )
}
```

## Configable

default config is:

```js
export let baseConfig = {
  // 预估路线相关配置
  center: [120.120716, 30.279077], // options
  expect: {
    able: true, // 是否开启预估路线
    showable: true, // 动态控制显示线路
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
    able: true, // 是否开启轨迹路线
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
}
```

- center (optional)
  
  这个是可选的，用于初次加载地图的中心店。若不配置，则将根据预估路线进行定位。

- expect 
  
  这个是预估路线的配置。是一个对象，下面的属性是针对预估路线展示的配置。

- able (optional)
  
  这个是表明是否开启预估路线的显示，默认是开启， false 则不开启。

- showable （optional）

  这个是表面是否在地图上展示该路线，默认是开启的， false 则不展示

- strokeColor (optional)

  这个是显示的路线的颜色，默认是 #f5222d 。

- strokeWeight (optional)

  表示显得的路线的宽度，默认是 3 。

- strokeOpacity （optional）
  
  表示路线的透明度。默认是 0.8 。 注意： 不要超过 1 

- line (required)

  这个是对应的线的经纬度点，由一个二维数组组成。

  [[x, y], [x2, y2], ...]

- points (required)

  这个表示对应的点的标记，里面是一个对象，可以定义图标。

  ```js
  points: {
    expectStart: { point: [120.110311, 30.287103], icon: '0' },
    expectEnd: { point: [120.111597, 30.287249], icon: '1' }
  }
  ```
  - expectStart

    点的名称，可自己定义。

    - point(required)
      
      对应的点的坐标

    - icon
      
      对应的图标, 如果不传，则会使用默认的图标。这可能不是你需要的，所以你可以自己定义一个传递进去。

      **注意：** 如果你使用默认的图标，请将 points 内的点名称取名为这两个固定的名称。( expectStar 和 expectEnd )

接下来还可以定义其他的线路，必须实际轨迹，按照同样的逻辑进行添加就可以了。

所以本文开头部分的一大截配置，真正需要的 只有 line 和 points 。


## Author

👤 **xiaohesong**

* Twitter: [@xiaohesong](https://twitter.com/xiaohesong)
* Github: [@baidu-component](https://github.com/baidu-component)

## Show your support

Give a ⭐️ if this project helped you !

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_