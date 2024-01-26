<template>
     <div class="flex items-center justify-center mt-6">
    <table class="table border">
      <thead >
        <tr >
          <th class="p-4">Nombre</th><th>Edad</th><th>Población</th><th>Selección</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(alumno,index) in alumnos" :key="index" >
          <td class="p-4">{{ alumno.Nombre }}</td><td class="p-4">{{ alumno.Edad }}</td><td class="p-4">{{ alumno.Poblacion }}</td><td v-if="alumno.Edad>=18 && alumno.Edad<=20" class="text-center"><input type="checkbox" :value="alumno.Nombre" v-model="seleccion"></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
import { useAlumnosStore } from '@/stores/alumnos.vue';
import { mapActions,mapWritableState } from 'pinia';

export default{
     computed:{
      ...mapWritableState(useAlumnosStore,["alumnos","seleccion"])
     }
}
</script>