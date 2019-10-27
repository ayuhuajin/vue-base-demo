import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/BaseDemo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/baseList',
    name: 'ListDemo',
    component: () => import('../views/ListDemo.vue')
  },
  {
    path: '/baseProp',
    name: 'PropDemo',
    component: () => import('../views/PropDemo.vue')
  },
  {
    path: '/vueCycle',
    name: 'VueCycle',
    component: () => import('../views/VueCycle.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
