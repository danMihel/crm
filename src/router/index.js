import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
     component: () => import('@/views/Login.vue')
  },
  {
    path: '/user',
    name: 'user',
     component: () => import('@/views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && store.state.isAuth === false) next( {name:'login'});
  else next()
})

export default router
