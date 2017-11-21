

import Login from '../components/login/login.vue'
import Index from '../components/index/index.vue'
import User from '../components/user/user.vue'
export default [
  {
    path:'/',
    name: 'index',
    component:Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/user',
    component: User
  }
]