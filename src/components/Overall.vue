<template>
  <div id="overall" class="tundra">
    <div id="map" ></div>
  </div>
</template>
<script>
  import esriLoader from 'esri-loader'

  export default {
    name: 'overall',
    data () {
      return {

      }
    },
    methods: {
      createMap: function () {
        esriLoader.dojoRequire(["esri/map"], (Map) => {
          let map = new Map("map",{
            center: [-118, 34.5],
            zoom: 8,
            logo:false,
            basemap:"topo"
          });
        });
      }
    },
    mounted: function(){
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
    }
  }
</script>
<style>
  @import url('https://js.arcgis.com/3.15/dijit/themes/tundra/tundra.css');
  @import url('https://js.arcgis.com/3.20/esri/css/esri.css');

  #map {
    position: absolute;;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
