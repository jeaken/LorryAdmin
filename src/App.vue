<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"><img src="../static/img/logo.png" alt="" width="60%"></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-right" id="nav-search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="请输入车牌号查询">
            </div>
            <button type="button" class="btn btn-default"></button>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <main class="row">
      <transition name="component-fade" mode="out-in">
        <component :is="currentView"></component>
      </transition>
      <!--边栏-->
      <aside class="col-xs-1 col-sm-1 col-md-1 col-lg-1" id="aside">
        <ul>
          <li v-for="(tab, index) in Tabs" @click="developTab(index, tab.view)" :class="{'aside-li-hover': isHover == index}"><router-link :to="tab.link">{{tab.text}}</router-link></li>
        </ul>
      </aside>
      <!--地图-->
      <article class="col-xs-11 col-sm-11 col-md-11 col-lg-11" id="article" @click="closeLi()"><router-view></router-view></article>
    </main>
  </div>
</template>
<script>
import extendTab1 from './components/extendTab1'
import extendTab2 from './components/extendTab2'

export default {
  name: 'app',
  data () {
    return {
      isHover: 0,// tab_active样式
      currentView: '',// 切换组件
      Tabs: [
        {text: "物流全景", link:"/Overall"},
        {text: "物流信息", link:"/", view: "extendTab1"},
        {text: "物流查询", link:"/", view: "extendTab2"}
      ]
    }
  },
  methods: {
    developTab: function(ind, view) {
      this.currentView = view;
      this.isHover = ind;
    },
    closeLi: function() {
      this.currentView = '';
      this.isHover = -1;
    }
  },
  components:{
      extendTab1: extendTab1,
      extendTab2: extendTab2
  }
}

</script>
<style lang="scss">
  @import './assets/css/appVue.scss';
  .navbar.navbar-inverse {
    border-radius: 0;
    margin-bottom: 0;
  }
</style>
