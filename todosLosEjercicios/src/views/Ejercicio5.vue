<template>
<!-- ### Crea una app que usando la API https://pokeapi.co/ haga lo siguiente:

1.  El componente Ejercicio5.vue cargará al inicio la información del pokemon "pikachu", sus habilidades y sus movimientos.
    1.  El nombre y la foto se enviarán como una propiedad al componente PokeGuia, y éste mostrará estos datos
2.  Una vez cargada la información de pikachu, podremos buscar la información de otros pokemons
    1.  Existe un campo de texto en el cual podremos buscar la información de un pokemon en concreto a partir de su nombre.
    2.  Al inicio cargaremos en un campo select todos los nombres de los pokemons.
3.  Al poner el nombre de un pokemon y pulsar buscar, o bien al cambiar el campo select se traerá la información de dicho pokemon
4.  Las habilidades y los moviminetos se cargan en el propio componente Ejercicio5.vue.
5.  EL nombre del pokemon y la imagen se le envía al componente PokeGuia para que los muestre. -->
<h2 class="text-center text-xl font-bold p-5 my-5">Ejercico 5</h2>
<div class="flex flex-col justify-center items-center">
     <p>### Crea una app que usando la API https://pokeapi.co/ haga lo siguiente:<br>

1.  El componente Ejercicio5.vue cargará al inicio la información del pokemon "pikachu", sus habilidades y sus movimientos.<br>
    2.  El nombre y la foto se enviarán como una propiedad al componente PokeGuia, y éste mostrará estos datos<br>
3.  Una vez cargada la información de pikachu, podremos buscar la información de otros pokemons<br>
    4.  Existe un campo de texto en el cual podremos buscar la información de un pokemon en concreto a partir de su nombre.<br>
    5.  Al inicio cargaremos en un campo select todos los nombres de los pokemons.<br>
6.  Al poner el nombre de un pokemon y pulsar buscar, o bien al cambiar el campo select se traerá la información de dicho pokemon<br>
7.  Las habilidades y los moviminetos se cargan en el propio componente Ejercicio5.vue.<br>
8.  EL nombre del pokemon y la imagen se le envía al componente PokeGuia para que los muestre.</p>
<Pokemon :nombre="pokemon" :img="img"></Pokemon>
<div>
     <select v-model="pokemon" id="" @change="getpokemon(pokemon)" class="border shadow-xl p-3 mb-4">
          <option v-for="pokemon in pokemons">{{ pokemon.name }}</option>
     </select>
</div>
<div class="flex justify-around">
     <div class="flex flex-col">
      <h4>Habilidades :</h4>
      <ul v-for="habilidad in habilidades">
     <li class="font-semibold text-lg m-3">{{ habilidad.ability.name}}</li></ul>
    </div></div>
    <h4 class="my-4 text-center">Movimientos :</h4>
    <div class="grid grid-cols-7 ">  
      <ul v-for="movimiento in movimientos" >
     <li class="p-2">{{ movimiento.move.name }}</li></ul>
    </div>
</div>
</template>
<script>
import Pokemon from '@/components/Pokemon.vue';
export default {
  data() {
    return {
      pokemons: [],
      pokemon: "pikachu",
      url: "",
      img:"",
      habilidades:[],
      movimientos:[]
    };
  },
  methods: {
    async getPokemons() {
      try {
        const respuesta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        const datos = await respuesta.json();
        this.pokemons = datos.results;
        console.log(datos.results);
        await this.getpokemon(this.pokemon);
        // Cualquier operación adicional después de getpokemon
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    },
    getpokemon(nombre) {
      this.pokemons.forEach((elemento) => {
        if (elemento.name === nombre) {
          this.url = elemento.url;
        }
      });
     this.get(this.url);
    },
    async get(url){
     const respuesta=await fetch(url);
     const datos=await respuesta.json();
     console.log(datos)
     this.img=datos.sprites.front_default;
     this.movimientos=datos.moves;
     this.habilidades=datos.abilities;

    },
    cambio(name){
     this.pokemon=name;
     this.getpokemon(this.pokemon);
    }
  },
  mounted() {
    this.getPokemons();
  },
  components:{Pokemon}
};

</script>