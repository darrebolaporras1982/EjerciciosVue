import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import secondPage from '../views/secondPage.vue';
import thirdPage from '../views/thirdPage.vue';
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
      name: 'secondPage',
      component: secondPage
    },
    {
      path: '/third',
      name: 'thirdPage',
      component:thirdPage
    },
  ]
})

export default router
