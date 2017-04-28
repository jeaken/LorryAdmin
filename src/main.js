// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import './assets/css/normal.css'
import './assets/css/bootstrap.css'

import Overall from './components/Overall' // 地图
import SearchResult from './components/SearchResult' //　查询结果
import Lorrys from './components/Lorrys.vue' // 全部卡车
import NewLorry from './components/NewLorry.vue' // 新增卡车

// 野狗实时
import ref from './assets/js/Tool'
Vue.use(ref)

Vue.use(VueRouter)
Vue.config.productionTip = false

// 引入组件
// 定义路由 & 路由重定向
const routes = [
  {
    path: '/',
    component: Overall
  },
  {
    path: '/Overall',
    component: Overall
  },
  {
    path: '/SearchResult',
    component: SearchResult
  },
  {
    path: '/Lorrys',
    component: Lorrys
  },
  {
    path: '/NewLorry',
    component: NewLorry
  },
]

// 创建router实例，传入配置routes
const router = new VueRouter({
  routes
})

// 创建和挂载根实例，通过router配置参数注入路由
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

