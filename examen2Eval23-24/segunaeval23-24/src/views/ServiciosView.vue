<template>
  <div>
    <h1>Bienvenidos a Servicios</h1>
    <Basurto></Basurto>
     <div>
          <label for="">Buscar Servicio <input type="text" v-model="filtroLetra" placeholder="Escribe el servicio"></label>
     </div>
     <div>
          <CuadroFavoritos></CuadroFavoritos>
     </div>
     
    <div>
      <table>
        <thead>
          <th>Icono</th>
          <th>Servicio</th>
          <th>Pabellón</th>
          <th>FAV</th>
        </thead>
        <tbody>
          <tr v-for="servicio in filtradoLetra">
            <td>
              <img
                style="width: 20px"
                :src="' ../../src/assets/iconos/' + servicio.ICONO"
                alt=""
              />
            </td>
            <td>{{ servicio.SERVICIO }}</td>
            <td>{{ servicio.ENTRADA }}</td>
            <td>
              <img @click="compruebaFavoritos(servicio.SERVICIO)"
                style="width: 20px"
                src="../assets/corazon-vacio.png"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Basurto from "@/components/Basurto.vue";
import CuadroFavoritos from "@/components/CuadroFavoritos.vue";
import { useFavoritosStore } from "@/stores/favoritos";
import { mapWritableState,mapActions } from "pinia";
import axios from "axios";

export default {
  data() {
    return {
      arrayfiltrado: [], //este array esta filtrado por mostrar=1
      filtroLetra:"",
    };
  },
  methods: {
    async getData() {
      const result = await axios.get("../../src/js/basurto.json");
      console.log(result.data);
      this.arrayfiltrado = result.data.filter(
        (servicio) => servicio.MOSTRAR == 1
      );
      console.log(this.arrayfiltrado);
    },
    ...mapActions(useFavoritosStore,["anadirFavoritos","eliminarFavoritos"]),
    compruebaFavoritos(servicio){
          const index = this.favoritos.findIndex((ele)=>ele.toLowerCase()==servicio.toLowerCase());
          console.log(index);
          if(index!=-1){
               this.eliminarFavoritos(servicio);
          }else{
               this.anadirFavoritos(servicio);
          }
    }
  },
  computed: {
     filtradoLetra(){
          return this.arrayfiltrado.filter((el)=>el.SERVICIO.toLowerCase().includes(this.filtroLetra.toLowerCase()));
     },
     ...mapWritableState(useFavoritosStore,["favoritos","numeroFavoritos"])
  },
  components: {
    Basurto, CuadroFavoritos,
    CuadroFavoritos
},
  mounted() {
    this.getData();
  },
};
</script>
