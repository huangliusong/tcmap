import Vue from 'vue'
import App from './App.vue'
// 引入路由和路由配置
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'



// 使用路由
Vue.use(VueRouter);
// 生成路由实例
const router = new VueRouter(routerConfig);
// 挂载
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})