

import Login from '../components/login/login.vue'
import Index from '../components/index/index.vue'
import User from '../components/user/user.vue'
import Date from '../components/date/date.vue'
import Qqq from '../components/qqq/qqq.vue'
export default [
  {
    path:'/',
    name: 'login',
    component:Login,
    meta: 'login'
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: 'index',
    children:[
      {
        path: 'qqq',
        component: Qqq,
        name: 'qqq',
        meta: 'qqq'
      }
    ]
  },
  {
    path:'/user',
    name: 'user',
    component: User,
    meta: 'user'
  },
  {
    path:'/date',
    name: 'date',
    component: Date,
    meta: 'date'
  },
  {
    path: '*',
    redirect: { name: 'index' }
  }
]