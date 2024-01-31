<template>
    <!-- 1.  En el primer componente padre Ejercicio6 estableceremos las características del gato a traer
      1.  Seleccionaremos las características que queramos teniendo en consideración la documentación de la API.
      2.  Al pulsar el botón mostrar gato, accederemos a la API con las características seleccionadas 
          y la URL devuelta se la mandaremos a un componente hijo para que la muestre. -->
    <h2 class="text-center text-xl font-bold p-5 my-5">Ejercicio 6</h2>
    <p class="flex w-100 text-center items-center justify-center">
      1. En el primer componente padre Ejercicio6 estableceremos las características del gato a traer <br>
      1. Seleccionaremos las características que queramos teniendo en consideración la documentación de la API.<br>
      2. Al pulsar el botón mostrar gato, accederemos a la API con las características seleccionadas 
         <br>y la URL devuelta se la mandaremos a un componente hijo para que la muestre.
    </p>
    <div class="flex flex-col items-center border text-center text-xl font-bold ">
      <h2>Propiedades de la imagen gatuna</h2>
      <div class="flex mx-4 my-4">
        <label for="">Tipo
        <select v-model="tipo" name="tipo" id="" class="mx-4">
          <option value="scuare">Scuare</option>
          <option value="medium">Medium</option>
          <option value="small">Small</option>
          <option value="xsmall">XSmall</option>
        </select></label>
      </div>
      <div>
        <label for="">Posición
        <select v-model="posicion" name="posicion" id="" class="mx-4">
          <option value="top">top</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
          <option value="left">left</option>
          <option value="center">Center</option>
        </select></label>
      </div>
      <div>
        <label for="">Título <input type="text" placeholder="titulo...." v-model="titulo" class="border text-xl my-4 p-2 rounded-lg"></label>
      </div>
      <div>
        <label for="">Tamaño <input type="text" placeholder="Tamaño en pixeles" v-model="tamano" class="border text-xl my-4 p-2 rounded-lg"></label>
      </div>
    </div>
    <div class="flex justify-center">
        <h1>{{ titulo }}</h1>
        <img :src=" img " alt="">
    </div>
    <div class="flex justify-center">
        <button @click="getImg" class=" p-4 mx-4 my-4 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium">Buscar</button>
    </div>
    
  </template>
  
  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        tipo: "small",
        posicion: "",
        titulo: "",
        tamano: 0,
        img:""
      };
    },
    methods:{
        async getImg(){
            const gato= await axios.get(`https://cataas.com/cat?type=${this.tipo}&position=${this.posicion}&width=${this.tamano}&height=${this.tamano}`);
            const imge=gato.config;
            const imgGato=imge.url;
            this.img=imgGato;
        }
    },
  };
  </script>
  