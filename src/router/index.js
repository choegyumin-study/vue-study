import Vue from 'vue';
import Router from 'vue-router';
import { AboutPage, DashboardPage } from '@/pages/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: DashboardPage,
    },
    {
      path: '/dashboard',
      component: DashboardPage,
    },
    {
      path: '/about',
      component: AboutPage,
    },
  ],
});
