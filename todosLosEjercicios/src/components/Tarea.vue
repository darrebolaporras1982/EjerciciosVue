<template>
     <div>
          <ul v-for="(tarea,index) in tareas" :key="index">
               <li>{{ tarea }} <button class="p-2 border rounded-lg bg-red-200 hover:bg-red-300 hover:shadow-red-200 shadow-xl" @click="eliminar(index)">Eliminar</button></li>

          </ul>
     </div>
</template>
<script>
export default{
     props:{
          tareas:[]
     },
     methods: {
          eliminar(index){
               this.$emit('del',index);
          }
     },

}
</script>