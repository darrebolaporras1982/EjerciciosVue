import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import secondView from '../views/secondView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/second',
      name: 'second',
      component: secondView
    },
  ]
})

export default router
