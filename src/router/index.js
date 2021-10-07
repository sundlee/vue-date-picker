import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/date1',
    name: 'Date1',
    component: () => import('../views/Date1.vue')
  },
    {
    path: '/date2',
    name: 'Date2',
    component: () => import('../views/Date2.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
