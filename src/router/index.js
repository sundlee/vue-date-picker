import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MyDateRangePicker from '../views/MyDateRangePicker.vue';
import DateRangePickerDemo1 from '../views/DateRangePickerDemo1.vue';
import DateRangePickerDemo2 from '../views/DateRangePickerDemo2.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/d1',
    name: 'MyDateRangePicker',
    component: MyDateRangePicker,
  },
  {
    path: '/d2',
    name: 'DateRangePickerDemo1',
    component: DateRangePickerDemo1,
  },
  {
    path: '/d3',
    name: 'DateRangePickerDemo',
    component: DateRangePickerDemo2,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
