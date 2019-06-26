# 更新日志

## 2019-06-25(v1.1.0)

添加百度infoWindow。

点击地图图标时，显示弹窗。目前的信息是显示：
- point
  当前图标的经度纬度

- desc
  当前图标点的名称，代表的意义

- able
  是否开启点击显示infoWindow。默认是`true`

http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b8

配置信息如下：
configs下新增 `infoWindow`属性， 用于控制infoWindow的展示

```js
configs = {
  ...configs,
  infoWindow: {
    able: true, // false为不绑定点击事件
    width: number,
    height: number
  },
  trajectory: {
    ...configs.trajectory,
    points: {
      ...configs.trajectory.points,
      driverStart: { 
        point: [120.120716, 30.279077], 
        icon: '0', 
        desc: '司机开始接单的点', // 如果没有值，就不显示
        dateTime: '' //如果没有值，那就不显示
      },
    }
  }
}
```

可以看到上面比上一版本多了`desc`和`dateTime`属性，这个都是显示在`infoWindow`里，其中还会显示经度纬度，这个是目前自带，未加自定义。

## 2019-06-26(v1.1.3)

配置不需要的路线，如果线路不需要就不需要那些假数据。直接不写就可以了。