<template>

     <div class="text-center text-xl my-6 font-bold"><h1>Bienvenido a las pagina de propiedades de Pokemons</h1></div>

     <div class="flex justify-center mx-6 text-xl p-4 text-center items-center content-center  "> 
          <label for="nombre" class="mx-2">Nombre :</label><select v-model="url"  class="border rounded-xl p-4" ><option v-for="(pokemon,index) in allPokemons" :key="index" :value="pokemon.url" >{{pokemon.name}}</option></select>
          <button class=" p-4 mx-4 my-4 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium" @click="getPokemonData">Solicitar informacion</button>
     </div>
     <h2 v-if="name!=''" class="text-center text-2xl text-green-400" >Tu pokemon se ha cargado correctamente, ya puedes visitar la pagina de Pokemon</h2>


</template>
<script>
import axios from 'axios';
import  { usePokemom }  from '@/stores/pokemon';
import { mapWritableState } from 'pinia';

     export default{
          
          data() {
               return {
                    allPokemons:[],
                    
               }
          },
          methods:{
               async getAllPokemons(){
                    const data= await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
                    const pokemons=data.data;
                    this.allPokemons=pokemons.results;
                    console.log(this.allPokemons);
               },
               async getPokemonData(){
               const data = await axios.get(this.url);
               console.log(data.data);
               const pokedata=data.data;
               this.name=pokedata.name;
               this.weight=pokedata.weight;
               this.height=pokedata.height;
               this.img=pokedata.sprites.front_default;   

          }
               
               
          },
          mounted() {
               this.getAllPokemons();
          },
          computed:{
               ...mapWritableState(usePokemom,["url","weight","height","img","name"]),
          }

     }
</script>