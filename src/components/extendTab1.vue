<!--边栏组件1-->
<template>
  <section id="section-li1">
    <ul>
      <li v-for="tab in Tabs"><router-link :to="tab.link">{{tab.text}}</router-link></li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'section-li1',
    data() {
        return {
            Tabs: [
              {text: "所有卡车", link: "/Lorrys"},
              {text: "增加卡车", link: "/NewLorry"}
            ]
        }
    },
    methods: {

    }
  }
</script>
