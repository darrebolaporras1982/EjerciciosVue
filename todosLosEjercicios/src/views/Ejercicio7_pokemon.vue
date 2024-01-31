<template>
     <div class="flex flex-col items-center  ">
          <h2>El nombre de tu pokemon seleccionado es :<span class="font-bold">{{ this.name }}</span></h2>
          <h3>{{ this.name }} tiene una altura de : {{ this.height }}</h3>
          <h3>{{ this.name }} tiene un peso de : {{ this.weight }}</h3>
     </div>
     <div class="flex justify-center"><img :src="img" alt=""></div>
     
</template>
<script>
import { usePokemom } from '@/stores/pokemon';
import { mapWritableState } from 'pinia';
export default{
     data() {
          return {
               
          }
     },
     methods: {
         
          
     },
     computed:{
          ...mapWritableState(usePokemom,["url","weight","height","img","name"]),
     }
}
</script>