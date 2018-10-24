import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routes from './router/index'
import VueRouter from 'vue-router'
import store from './store/index'
Vue.use(ElementUI)
Vue.use(VueRouter)
// 提交代码
const router = new VueRouter({
  routes,
  mode: 'history',
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})