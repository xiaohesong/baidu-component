
declare global {
  interface Window {
    AMap: any;
    BMap: any;
    initBMapCallBack: any;
    mapLoader: any;
  }
}

const AK = 'olqtPciVr8PWFoKFnNWof0j0uIMukGE4'

function loadScript(ak: string | undefined = AK) {
  if (!window.BMap && !window.mapLoader) {
    return window.mapLoader = new Promise((resolve) => {
      // changeCsp()
      const script = document.createElement('script');
      script.src = `https://api.map.baidu.com/api?v=2.0.0&ak=${ak}&callback=initBMapCallBack`;
      document.body.appendChild(script);

      window.initBMapCallBack = () => {
        resolve(window.BMap);
        document.body.removeChild(script);
        // delete window.mapLoader;
        delete window.initBMapCallBack;
      };
    });
  }

  return window.mapLoader;
}

export async function init() {
  await loadScript()
  let map = new window.BMap.Map("container");
  // 创建地图实例  
  // const point = new window.BMap.Point(...center);
  // 创建点坐标  
  // map.centerAndZoom(point, 15);
  // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom()

  return map
}