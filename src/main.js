import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import VueRouter from 'vue-router'
import store from './store/index'
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})