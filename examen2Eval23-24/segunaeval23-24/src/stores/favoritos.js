import { defineStore } from "pinia";

export const useFavoritosStore = defineStore("favoritos", {
  state: () => ({
    numeroFavoritos: 0,
    favoritos: [],
  }),
  getters: {},
  actions: {
    anadirFavoritos(servicio) {
      alert('Has añadido ' + servicio + ' a tus favoritos');
      this.numeroFavoritos++;
      this.favoritos.unshift(servicio);
    },
    eliminarFavoritos(servicio) {
      alert('Has quitado ' + servicio + ' a tus favoritos');
      this.numeroFavoritos--;
      const favorito = this.favoritos.indexOf(servicio);
      this.favoritos.splice(favorito, 1);
    }, 
  }
});
