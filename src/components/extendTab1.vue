<!--边栏组件1-->
<template>
  <section id="section-li1">
    <ul>
      <li><router-link to="/Lorrys">所有卡车</router-link></li>
      <li @click="setUpdate()"><router-link to="/NewLorry">增加卡车</router-link></li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'section-li1',
    data() {
        return {

        }
    },
    methods: {
      setUpdate: function() {
        this.$store.commit('getUpdate', {
            code: '',
            start: '',
            end: '',
            current_lng: '',
            current_lat: '',
            speed: '',
            state: ''
        });
      }
    }
  }
</script>
