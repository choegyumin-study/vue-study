import Vue from 'vue';
import Router from 'vue-router';
import { Dashboard } from '@/views/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
  ],
});
