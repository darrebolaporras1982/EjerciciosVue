<template>
     <h2>Segunda pagina</h2>

     <ul v-for="sel in seleccion">
     <li>{{ sel }}</li></ul>
</template>
<script>
import { useAlumnosStore } from '@/stores/alumnos.vue';
import { mapWritableState } from 'pinia';
export default{
     computed:{
          ...mapWritableState(useAlumnosStore,["alumnos","seleccion"])
     }
}
</script>