<template>
     
     <h3 class="text-center text-4xl font-semibold p-4 m-auto ">Tercera Pagina</h3>
     <div class="flex flex-col m-4 ml-32">
          <label for="">Nombre: {{ this.nombre }}</label>
          <label for="">producto: {{ this.seleccion }}</label>
          <label for="">marca: {{ this.marca }}</label>
          <label for="">Modelo: {{ this.modelo }}</label>
          <label for="">precio: {{ this.precio }} Euros</label>
          
     </div>

</template>
<script>
import { mapWritableState } from 'pinia';
import { useStoreMusica } from '@/stores/StoreMusica.vue';
export default{
     data() {
          return {
               
          }
     },
     
     computed:{
          ...mapWritableState(useStoreMusica,["tiendaDeMusica","seleccion","nombre","marca","modelo","precio","indice"])
     }
}

</script>