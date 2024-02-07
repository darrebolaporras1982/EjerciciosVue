<template>
  <div>
    <h1>Bienvenidos a Favoritos</h1>
     <Basurto></Basurto>
    <div>
      <ul v-for="favorito in favoritos">
        <li>
          {{ favorito }}
          <img
            style="width: 20px"
            src="../assets/eliminar.png"
            alt=""
            @click="eliminarFavoritos(favorito)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CuadroFavoritos from "@/components/CuadroFavoritos.vue";
import Basurto from "@/components/Basurto.vue";
import { useFavoritosStore } from "@/stores/favoritos";
import { mapWritableState, mapActions } from "pinia";
export default {
  components: {
    CuadroFavoritos,Basurto
  },
  computed: {
    ...mapWritableState(useFavoritosStore, ["favoritos"]),
  },
  methods: {
    ...mapActions(useFavoritosStore, ["eliminarFavoritos"]),
  },
};
</script>
