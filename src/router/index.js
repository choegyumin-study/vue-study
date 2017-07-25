import Vue from 'vue';
import Router from 'vue-router';
import { AboutView, DashboardView } from '@/views/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: DashboardView,
    },
    {
      path: '/dashboard',
      component: DashboardView,
    },
    {
      path: '/about',
      component: AboutView,
    },
  ],
});
