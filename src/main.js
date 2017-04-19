// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// import url('https://js.arcgis.com/3.15/esri/css/esri.css')
import * as esriLoader from 'esri-loader'

import './assets/css/normal.css'
import './assets/css/bootstrap.css'

import Overall from './components/Overall'
import SearchResult from './components/SearchResult'

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

