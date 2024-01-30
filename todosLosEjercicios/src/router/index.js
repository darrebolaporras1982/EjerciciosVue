import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Ejercicio1 from '../views/Ejercicio1.vue';
import Ejercicio2 from '../views/Ejercicio2.vue';
import Ejercicio3 from '../views/Ejercicio3.vue';
import Ejercicio4 from '../views/Ejercicio4.vue';
import Ejercicio5 from '../views/Ejercicio5.vue';
import Ejercicio6 from '../views/Ejercicio6.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ejercicio1',
      name: 'ejercicio1',
      component: Ejercicio1,
    },
    {
      path: '/ejercicio2',
      name: 'ejercicio2',
      component: Ejercicio2,
    },
    {
      path: '/ejercicio3',
      name: 'ejercicio3',
      component: Ejercicio3,
    },
    {
      path: '/ejercicio4',
      name: 'ejercicio4',
      component: Ejercicio4,
    },
    {
      path: '/ejercicio5',
      name: 'ejercicio5',
      component: Ejercicio5,
    },
    {
      path: '/ejercicio6',
      name: 'ejercicio6',
      component: Ejercicio6,
    },
    
  ]
})

export default router
