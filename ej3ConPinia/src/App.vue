<template>
 <!-- Teniendo en cuenta la api de pokemon, hacer una vista que me muestre los pokemons, 
 y me genere x objetos diferentes en funcion el tipo de esos pokemon y me guarde su 
 informacion en diferentes arrays de objetos. en la segynda vista me muestra la info 
 de uno de esos arrays en concreto. La segunda vista accedera a los arays, no a la api. -->
 <div>
  <Header></Header>
  <NavBar></NavBar>
  <router-view></router-view>
 </div>
</template>
<script>
import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
export default{
  components:{
    Header,
    NavBar
  }
}
</script>