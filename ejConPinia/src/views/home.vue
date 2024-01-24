<template>
     <div class="grid grid-cols-2" >
          <div class="flex flex-col items-center" >
            <h3 class="text-3xl mx-4 p-5 ">Puedes seleccionar el objeto que prefieras</h3>
            <select  v-model="Local" class="shadow-xl border w-80 rounded-lg h-10" @change="Revalorizar(Local)">
               <option :value="objeto.producto"  v-for="(objeto,index) in tiendaDeMusica" :key="index">{{ objeto.producto }}</option>
          </select>
          </div>
          <div class="flex flex-col items-center text-center">
            <h3 class="text-3xl mx-4 p-5 ">Recuerda tu objeto seleccionado: </h3>
            <div>{{ Local }}</div>
          </div>

        </div>
        
</template>
<script>
import { mapWritableState,mapActions } from 'pinia';
import { useStoreMusica } from '@/stores/StoreMusica.vue';

export default{
     data() {
          return {
               Local:"",
               
          }
     },
     methods: {
          Revalorizar(Local){
               this.valorizar(Local);
          },
          ...mapActions(useStoreMusica,["valorizar"])
     },
     computed:{
          ...mapWritableState(useStoreMusica,["tiendaDeMusica"])
     },
}
</script>