import { createRouter, createWebHistory } from 'vue-router';
import homeView from '../views/homeView.vue';
import informationView from '../views/informationView.vue';
import othersView from '../views/othersView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: homeView
    },
    {
      path: '/informationView',
      name: 'informationView',
      component: informationView
    },
    {
      path: '/othersView',
      name: 'othersView',
      component: othersView
    },
  ]
})

export default router