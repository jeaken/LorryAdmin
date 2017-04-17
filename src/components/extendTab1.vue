<!--边栏组件1-->
<template>
  <section id="section-li1">
    <ul>
      <li v-for="tab in Tabs"><a href="#">{{tab.text}}</a></li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'section-li1',
    data() {
        return {
            Tabs: [
              {text: "所有卡车"},
              {text: "增加卡车"}
            ]
        }
    },
    methods: {

    }
  }
</script>
