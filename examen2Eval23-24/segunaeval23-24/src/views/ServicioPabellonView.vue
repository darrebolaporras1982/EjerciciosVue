<template>
  <div>
    <h1>Bienvenidos a Servicios Pabellones</h1>
    <Basurto></Basurto>
    <div>
      <select v-model="entrada">
        <option v-for="rep in array" @change="entradas" value="">
          {{ rep.ENTRADA }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import Basurto from "@/components/Basurto.vue";
import axios from "axios";
import { useFavoritosStore } from "@/stores/favoritos";
import { mapWritableState, mapActions } from "pinia";
export default {
  components: {
    Basurto,
  },
  data() {
    return {
      arrayfiltrado: [],

      entrada: "",
    };
  },
  methods: {
    async getData() {
      const result = await axios.get("../../src/js/basurto.json");
      this.arrayfiltrado = result.data.filter(
        (servicio) => servicio.MOSTRAR == 1
      );
    },
  },
  computed: {},
  mounted() {
    this.getData();
  },
};
</script>
