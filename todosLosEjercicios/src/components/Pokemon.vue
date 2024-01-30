<template>
  <div>
    <div>
      <h1>Pokemon</h1>
      <h2>Pokeapi</h2>
    </div>
    <div>
      <h4>Nombre del Pokemon : {{ this.pokemon }}</h4>
      <img :src="img" alt="" />
    </div>
    <div>
      <h4>Habilidades :</h4>
      <ul v-for="habilidad in habilidades">
     <li>{{ habilidad.abilities.ability.name}}</li></ul>
    </div>
    <div>
      <h4>Movimientos :</h4>
      <ul v-for="movimiento in movimientos">
     <li>{{ movimiento.move.name }}</li></ul>
    </div>
  </div>
</template>
<script>
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
          console.log("He entrado");
        }
      });
     this.get(this.url);
    },
    async get(url){
     const respuesta=await fetch(url);
     const datos=await respuesta.json();
     console.log(datos)
     this.img=datos.sprites;
     this.movimientos=datos.moves;
     this.habilidades=datos.abilities.ability;

    }
  },
  mounted() {
    this.getPokemons();
  },
};
</script>
