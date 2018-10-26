import Index from '../view/index/index.vue'
import User from '../view/user/user.vue'
export default [
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