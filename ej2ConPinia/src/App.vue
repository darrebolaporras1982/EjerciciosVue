<template>
  <!-- Partimos de un array de objetos con los nombres, la edad y poblacion del 
  alunnado de 2dw3. En la segunda vista, me permitira seleccionar todos los alumnos
   y/o alumnas que tengan una edad entre 18 y 20 años. En la tercera vista me mostrará dichos alumnos.
    La primera será de bienvenida -->
  <h2 class="text-center text-4xl bg-blue">Alumnos de "2DW3A"</h2>
    <NavBar></NavBar>


  <router-view></router-view>
</template>
<script>
import NavBar from './components/navBar.vue';

export default{
    components: { NavBar }
}
</script>
