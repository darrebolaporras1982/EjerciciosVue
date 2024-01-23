<template>
  <div>
    <!-- 1- Realiza un ejercicio en vue.js que utilize 3 vistas diferentes a las cuales se accedera mediante 3 rutas. En la prmera
       vista, se cargarán los datos de un array (de objetos) de una tienda de musica. En la segunda vista, mostrará el elemento 
       seleccionado en la primera vista (piano, gitarra...) y, pedirá un nombre de usuario que no podrá contener ni numeros ni simbolos.
        Por ultimo, en la vista resumen me mostrará la informafion del usuario y el elemento seleccionado en la primera vista. -->

      

        <h1 class="text-5xl text-center p-6 bg-purple-200 my-2 font-bold shadow-xl">Bienvenidos a la tienda de Musica</h1>
        <NavBar></NavBar>
        <router-view></router-view>

	   
	   
  </div>
</template>
<script>
import NavBar from './components/navBar.vue';
export default {
    data() {
        return {};
    },
    components: { NavBar }
}
</script>
