<!--边栏组件2-->
<template>
  <section id="section-li2" class=" col-sm-12 col-md-12 col-lg-12">
    <div class="input-group">
      <input type="text" class="form-control searchText" aria-label="Text input with segmented button dropdown" v-bind:placeholder="placeHolder">
      <div class="input-group-btn" ref="dropDown1">
        <button type="button" class="btn btn-default"><router-link to="/SearchResult">Search</router-link></button>
        <button type="button" class="btn btn-default dropdown-toggle"  @click = "open()" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span class="caret"></span>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu dropdown-menu-left">
          <li v-for = "(tab, index) in Tabs"  @click = "close($event,index)"><a href="#">{{tab.text}}</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'section-li2',
    data() {
      return {
        placeHolder:'车牌查询',
        Tabs: [
          {text: "车牌查询"},
          {text: "终点查询"},
          {text: "起点查询"}
        ]
      }
    },
    methods: {
        open: function() {
            this.$refs.dropDown1.classList.add('open');
        },
        close: function (e,ind) {
          this.placeHolder = e.srcElement.text;
          this.$refs.dropDown1.classList.remove('open');
        }
    }
  }
</script>
<style>
  .form-control.searchText {
    top: 7px;
    height: 34px;
  }
</style>
