<template>
     <div class="text-center text-xl font-semibold"><h2 >Information Page</h2>
     <h2>Estea informacion es del Array</h2></div>
     
     <div class="grid grid-cols-5">
     <ul v-for="pokemon in arrayFiltrado">
          <li class="">{{ pokemon.pokemon.name }}</li>
     </ul>
     </div>
</template>
<script>
import { usePokemonStore } from '@/stores/PokemonStore.vue';
import { mapWritableState } from 'pinia';
     export default{
          computed:{
               ...mapWritableState(usePokemonStore,["arrayFiltrado"])
          }
     }
</script>