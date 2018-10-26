import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index/index.vue'
import User from '../view/user/user.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: 'index',
    },
    {
      path:'/user',
      name: 'user',
      component: User,
      meta: 'user'
    },
    {
      path: '*',
      redirect: { name: 'index' }
    }
  ]
})