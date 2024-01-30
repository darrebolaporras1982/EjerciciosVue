<template>
     <!-- ### Crea una app que haga lo siguiente:
     
     1.  Tendrá un campo de tipo texto mediante el que se añadirán tareas a un array.
     2.  Para añadir la tarea se podrá hacer:
         1.  Pulsando la tecla return
         2.  Al pulsar un botón
     3.  Al inicio se mostrará un mensaje indicando que no hay elementos a mostrar
     4.  Cuando se meta algún elemento en la lista ya se mostrarán en un nuevo ul -->
     <h2 class="text-center text-xl font-bold p-5 my-5">Ejercico 2</h2>
     <div class="flex flex-col items-center justify-center">
          <p class="my-5">1.  Tendrá un campo de tipo texto mediante el que se añadirán tareas a un array. <br>
     2.  Para añadir la tarea se podrá hacer:<br>
         3.  Pulsando la tecla return<br>
         4.  Al pulsar un botón<br>
     5.  Al inicio se mostrará un mensaje indicando que no hay elementos a mostrar<br>
     6.  Cuando se meta algún elemento en la lista ya se mostrarán en un nuevo ul</p><br>
     
               <label class="text-lg font-medium">Tarea : <input v-model="nuevaTarea" type="text" name="" id="" placeholder="Escribe una nueva tarea..." class="p-2 m-2 text-lg font-medium border rounded-lg" @keyup.enter="add"> </label>
               <button class="p-5 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium my-5" @click="add">Ingresar Tarea</button>
               <p class="text-center text-xl text-red-300 font-semibold my-5 p-5" v-if="tareas.length===0">No hay Tareas pensientes para mostrar</p>
               <ul v-for="(tarea, index) in tareas" :key="index">
                    <li class="text-lg font-medium">{{ tarea }}</li>
               </ul>
     </div>    
     </template>
     <script>	
          export default{
               data() {
                    return {
                         tareas:[],
                         nuevaTarea:""
     
                    }
               },
               methods: {
                    add(){
                         if(this.nuevaTarea!==""){
                              this.tareas.push(this.nuevaTarea);
                              this.nuevaTarea="";
                         }else{
                              alert("añade una tarea");
                         }
                         
                    }
               },
          }
     
     </script>