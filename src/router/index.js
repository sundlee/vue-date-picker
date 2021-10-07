import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Vue2DateRangePicker from '../views/Vue2DateRangePicker.vue';
import VueTimeDateRangePicker from '../views/VueTimeDateRangePicker.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/d1',
    name: 'Vue2DateRangePicker',
    component: Vue2DateRangePicker,
  },
    {
    path: '/d2',
    name: 'VueTimeDateRangePicker',
    component: VueTimeDateRangePicker,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
