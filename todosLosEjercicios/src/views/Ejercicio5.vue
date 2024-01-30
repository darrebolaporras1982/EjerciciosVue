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
<Pokemon></Pokemon>
</div>
</template>
<script>
import Pokemon from '@/components/Pokemon.vue';
     export default{
          data() {
               return {
                    
               }
          },
          components:{
               Pokemon
          }
     }

</script>