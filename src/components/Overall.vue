<template>
  <div id="overall" class="tundra">
    <button @click="createMaps()">123</button>
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
      createMaps: function () {

        if (!esriLoader.isLoaded()) {
          // no, lazy load it the ArcGIS API before using its classes
          esriLoader.bootstrap((err) => {
            if (err) {
              console.error(err);
            } else {
              // once it's loaded, create the map
              esriLoader.dojoRequire(["esri/map"], (Map) => {
                let map = new Map("map", {
                  center: [-118, 34.5],
                  zoom: 8,
                  basemap: "dark-gray"
                });
              });
            }
          }, {
            // use a specific version instead of latest 4.x
            url: 'https://js.arcgis.com/3.20/'
          });
        } else {
          // ArcGIS API is already loaded, just create the map
          esriLoader.dojoRequire(["esri/map"], (Map) => {
            let map = new Map("map", {
              center: [-118, 34.5],
              zoom: 8,
              basemap: "dark-gray"
            });
          });
        }
      }
    },
  }
</script>
<style lang="scss">
</style>
