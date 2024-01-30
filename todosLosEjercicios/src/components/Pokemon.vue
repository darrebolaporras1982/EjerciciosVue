<template>
  <div>
    <div class="flex flex-col text-center justify-center items-center font-bold text-3xl">
      <h1>Pokemon</h1>
      <h2>Pokeapi</h2>
    </div>
    <div class="flex items-center justify-center">
      <h4 class="text-xl font-extrabold  ">Nombre del Pokemon : <span class="font-serif" >{{ this.nombre }}</span></h4>
      <img :src="img"/>
    </div>
   
  </div>
</template>
<script>
export default{
  props:{
    img:String,
    nombre:String
  }
}
</script>
