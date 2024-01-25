<template>
    
     <h3 class="text-2xl text-center bg-violet-100 border around-xl p-4">segunda pagina</h3>
     <h3 class="font-semibold bg-blue-100 p-4 mx-5 w-auto text-center">Esta es la seleccion anterior:  {{ this.seleccion }}</h3>
     <span v-if=" this.mensaje_error " class="text-red-400 p-4">No puede haber ni números ni simbolos</span>
     <label for="nombre" class="mx-8 text-xl font-bold p-5 bg-black text-white m-12">Escribe tu nombre</label>
     <input type="text" name="nombre" id="nombre" v-model="nombre" @keyup="comprueba_nombre(nombre)" class="shadow-xl p-4 bg-yellow-200 rounded-xl">
     
</template>
<script>
import { useStoreMusica } from '@/stores/StoreMusica.vue';
import { mapWritableState,mapActions } from 'pinia';

export default{
     data() {
          return {
               
               patron:/^[A-Za-z\s]+$/,
               mensaje:"",
               mensaje_error:false
               
          }
     },
     methods:{
          comprueba_nombre(nombre){
          if(nombre!=""){
              if(!this.patron.test(nombre)){
               this.mensaje_error=true;
              } else{
               this.nombrar(nombre)
               this.mensaje_error=false;
              }
          }else{
               this.mensaje_error=false;
              }
     },
     ...mapActions(useStoreMusica,["nombrar"]),
     },
     computed:{
          ...mapWritableState(useStoreMusica,["tiendaDeMusica","seleccion","nombre"])
     },
}
</script>