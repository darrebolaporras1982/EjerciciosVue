<template>
<!--      Desde home se visualzará un slider con fotos de pokemons.
2. Al pulsar el enlace del menú "pokemon" se accederá a una vista diferente en la que aparecerá un select con todos los pokemons, y una vez seleccinado pulsando el botón nos mostrará información del pokemon seleccionado: altura y peso. Para ello enviaremos por la ruta el nombre del pokemon y en la misma 
 -->
 <h2 class="text-center text-xl font-bold p-5 my-5">Ejercicio 7</h2>
 <div class="container-fluid">
<p>Desde home se visualzará un slider con fotos de pokemons.
2. Al pulsar el enlace del menú "pokemon" se accederá a una vista diferente en la que aparecerá un select con todos 
los pokemons, y una vez seleccinado pulsando el botón nos mostrará información del pokemon seleccionado: altura y peso.
 Para ello enviaremos por la ruta el nombre del pokemon y en la misma 
 </p>
</div>
<div>
     <NavBarEj7></NavBarEj7>

     <router-view></router-view>
     
</div>
</template>
<script>


import NavBarEj7 from '@/components/NavBarEj7.vue';
export default{ components: { NavBarEj7 } }

</script>