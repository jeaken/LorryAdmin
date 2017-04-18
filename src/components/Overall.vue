<template>
  <div id="overall" class="tundra">
    <div id="map" ></div>
  </div>
</template>
<script>
  export default {
    name: 'overall',
    data () {
      return {

      }
    },
    methods: {

    },
    mounted() {
      var myMap = new Map("map",{
          logo:false,
          basemap:"topo"
        });
//      require(["esri/map","dojo/domReady!"], function(Map){
//        var myMap = new Map("map",{
//          logo:false,
//          basemap:"topo"
//        });
//      });
    }
  }
</script>
<style lang="scss">
</style>
