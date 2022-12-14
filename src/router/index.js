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
    path: '/company',
    name: 'company',
     component: () => import('@/views/Company.vue')
  },
  {
    path: '/company/:id',
    name: 'spec-company',
     component: () => import('@/views/SpecCompany.vue')
  },
  {
    path: '/person',
    name: 'person',
     component: () => import('@/views/Person.vue')
  },
  {
    path: '/person/:id',
    name: 'spec-person',
     component: () => import('@/views/SpecPerson.vue')
  },
  {
    path: '/contract',
    name: 'contract',
     component: () => import('@/views/Contract.vue')
  },
  {
    path: '/contract/:id',
    name: 'spec-contract',
     component: () => import('@/views/SpecContract.vue')
  },
  {
    path: '/case',
    name: 'case',
     component: () => import('@/views/Case.vue')
  },
  {
    path: '/case/:id',
    name: 'spec-case',
     component: () => import('@/views/SpecCase.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && store.state.AuthModule.logged === false) next( {name:'login'});
  else next()
})

export default router
