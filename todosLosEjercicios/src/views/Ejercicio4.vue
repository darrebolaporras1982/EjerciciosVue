<template>
<!-- ### Crea una app que haga lo siguiente:

1.  El componente Ejercicio4.vue tendrá un campo de tipo texto y un botón crear.
    1.  Al pulsar el botón agregar se llamará auna función que agregará la ueva tarea
2.  Cuando haya tareas agregadas, se visualizará un div, y en el se cargará el componente listaTareas,
 al qu se le pasará la propiedad tarea para que la muestre .
3.  El componente hijo listaTareas tendrá un botón que enviará el evento de la tarea a eliminar al padre 
para que lo borre de la lista de tareas -->
<h2 class="text-center text-xl font-bold p-5 my-5">Ejercico 4</h2>
<div class="flex flex-col text-center justify-center items-center p-2 my-5">
     <p>1.  El componente Ejercicio4.vue tendrá un campo de tipo texto y un botón crear.<br>
    1.  Al pulsar el botón agregar se llamará auna función que agregará la ueva tarea<br>
2.  Cuando haya tareas agregadas, se visualizará un div, y en el se cargará el componente listaTareas,
 al qu se le pasará la propiedad tarea para que la muestre .<br>
3.  El componente hijo listaTareas tendrá un botón que enviará el evento de la tarea a eliminar al padre 
para que lo borre de la lista de tareas</p>
          <div class="my-5 ">
               <input type="text" name="" id="" class="p-5 border rounded-lg shadow-xl" v-model="tarea"><button class="p-4 mx-4 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium" @click="agregar">Crear</button>
          </div>
          <div v-if="tareas.length!=0">
               <Tarea :tareas="tareas" @del="remove"></Tarea>
          </div>
</div>
</template>
<script>
import Tarea from '@/components/Tarea.vue';
     export default{
          data() {
               return {
                    tareas:[],
                    tarea:""
               }
          },
          methods: {
               agregar(){
                    this.tareas.push(this.tarea);
                    this.tarea="";
               },
               remove(index){
                    this.tareas.splice(index,1);
               }
          },
          components:{
               Tarea
          }
     }
</script>