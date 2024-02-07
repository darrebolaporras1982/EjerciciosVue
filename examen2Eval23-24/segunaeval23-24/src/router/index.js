import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import FavoritosView from '../views/FavoritosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ServicioPabellonView from '../views/ServicioPabellonView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: FavoritosView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/pabellones',
      name: 'pabellones',
      component: ServicioPabellonView
    }
  ]
})

export default router
