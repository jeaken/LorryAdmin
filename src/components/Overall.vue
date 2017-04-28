<template>
  <div id="overall" class="tundra">
    <div id="map" ></div>
    <button @click="centerZoom()" id="zoomCenter" class="btn btn-default" :class="{'hidden': isHide}">★</button>
  </div>
</template>
<script>
  import esriLoader from 'esri-loader'

  export default {
    name: 'overall',
    data () {
      return {
        map: {'loaded': ''},
        isHide: true
      }
    },
    watch: {
      'map.loaded': function () {
        if(this.map.loaded == true) {
          this.isHide = false;
          this.createCar();// 创建小车图标
        }
      }
    },
    methods: {
        // 创建地图
      createMap: function () {
        esriLoader.dojoRequire(["esri/map", "dojo/domReady!"], (Map) => {
          this.map = new Map("map",{
            center: [120.44, 36.14],
            zoom: 12,
            logo:false,
            basemap:"osm"
          });
        });
      },
      // 缩放到中心图层
      centerZoom: function() {
        this.map.centerAndZoom([120.44, 36.14], 12);
      },
      // 创建小车图标
      createCar: function() {
        esriLoader.dojoRequire(["esri/map", "esri/layers/GraphicsLayer", "esri/graphic", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "dojo/domReady!"],
          (Map, GraphicsLayer, Graphic, Point, PictureMarkerSymbol) => {
          let graphicLayer = new GraphicsLayer();// 创建图层

          this.map.addLayer(graphicLayer);// 添加图层

          let ptCar = new Point({
                longitude: 120.44555555,//设置注记经纬度投影
                latitude: 36.14555555
              }),
              syCar = new PictureMarkerSymbol("./../../static/img/logo.png", 25, 25),// 创建注记点url，大小
              graphic = new Graphic(ptCar, syCar);//创建图像

              //把图像添加到刚才创建的图层上
              graphicLayer.add(graphic);

        });
      },

    },
    mounted: function(){
      // 监听esriLoader是否存在，创建map
      if (!esriLoader.isLoaded()) {
        // no, lazy load it the ArcGIS API before using its classes
        esriLoader.bootstrap((err) => {
          if (err) {
            console.error(err);
          } else {
            // once it's loaded, create the map
            this.createMap();
          }
        }, {
          // use a specific version instead of latest 4.x
          url: 'https://js.arcgis.com/3.20/'
        });
      } else {
        // ArcGIS API is already loaded, just create the map
        this.createMap();
      }
    },

  }
</script>
<style>
  @import url('https://js.arcgis.com/3.15/dijit/themes/tundra/tundra.css');
  @import url('https://js.arcgis.com/3.20/esri/css/esri.css');

  @import './../assets/css/overRall.css';

</style>
