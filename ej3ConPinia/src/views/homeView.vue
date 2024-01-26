<template>
     <div>
          <div class="flex flex-col">
               <h3 class="text-xl font-semibold text-center ">Selecciona el tipo para mostrarte los pokemons :</h3>
               <div class="flex justify-center">
               <select v-model="url" class="border shadow-xl p-2 rounded-xl mx-3 bg-slate-100" @change="getpokemonsType"> 
                    <option :value="tipo.url" v-for="tipo in pokemons" >{{ tipo.name }}</option>
               </select>
               <button @click="" class="p-4 bg-green-100 rounded-xl hover:bg-green-200 hover:shadow-xl">Obtener</button>
               </div>
          </div>
          <div class="grid grid-cols-5">
               <ul v-for="filtra in filtrado">
                    <li class="p-1 text-center">{{ filtra.pokemon.name }}</li>
               </ul>
          </div>
     </div>
</template>
<script>
import { usePokemonStore } from '@/stores/PokemonStore.vue'
import { mapWritableState,mapActions } from 'pinia'
     export default{
          data() {
               return {
                    pokemons:[],
                    url:"",
                    filtrado:[]
               }
          },
          methods:{
               async getPokemonsData(){
                    await fetch('https://pokeapi.co/api/v2/type/')
                    .then(resp =>resp.json())
                    .then(data=>{this.pokemons=data.results})
               },
               async getpokemonsType(){
                    await fetch(this.url)
                    .then(resp => resp.json()).then(data=>{this.filtrado=data.pokemon});
                    await this.valores(this.filtrado);
               },
               ...mapActions(usePokemonStore,["valores"]),
               valores (array){
               this.arrayFiltrado=array;
          }
          },
          mounted(){
               this.getPokemonsData();
          },
          computed:{
               ...mapWritableState(usePokemonStore,["arrayFiltrado"])
          }
     }
</script>