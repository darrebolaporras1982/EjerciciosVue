<template>
     <div>
          <h2>Favoritos</h2>
     </div>
     <div v-if="favoritos.length == 0">No tienes Favoritos en la Lista</div>
          <p>Tienes {{ numeroFavoritos }} en favoritos</p>
     <ul v-for="favorit in favoritos">
          <li>{{ favorit }}</li>
     </ul>
</template>
<script>
import { useFavoritosStore } from '@/stores/favoritos';
import { mapWritableState,mapActions } from 'pinia';

     export default{
          methods: {
               ...mapActions(useFavoritosStore,["anadirFavoritos","eliminarFavoritos"]),
          },
          computed:{
               ...mapWritableState(useFavoritosStore,["favoritos","numeroFavoritos"]),
          }
     }
</script>