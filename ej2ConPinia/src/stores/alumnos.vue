<script>
import { defineStore } from "pinia";

export const useAlumnosStore=defineStore('alumnos',{
     state:()=>({
          alumnos: [{ Nombre: "Juan", Edad: 20, Poblacion: "Ciudad A" },
          { Nombre: "María", Edad: 25, Poblacion: "Ciudad B" },
          { Nombre: "Carlos", Edad: 30, Poblacion: "Ciudad C" },
          { Nombre: "Ana", Edad: 22, Poblacion: "Ciudad D" },
          { Nombre: "Pedro", Edad: 18, Poblacion: "Ciudad E" },
          { Nombre: "Laura", Edad: 35, Poblacion: "Ciudad A" },
          { Nombre: "David", Edad: 28, Poblacion: "Ciudad B" },
          { Nombre: "Elena", Edad: 32, Poblacion: "Ciudad C" },
          { Nombre: "Diego", Edad: 16, Poblacion: "Ciudad D" },
          { Nombre: "Luis", Edad: 40, Poblacion: "Ciudad E" },
          { Nombre: "Sara", Edad: 26, Poblacion: "Ciudad A" },
          { Nombre: "Alejandro", Edad: 34, Poblacion: "Ciudad B" },
          { Nombre: "Isabel", Edad: 28, Poblacion: "Ciudad C" },
          { Nombre: "Javier", Edad: 19, Poblacion: "Ciudad D" },
          { Nombre: "Carmen", Edad: 31, Poblacion: "Ciudad E" },
          { Nombre: "Roberto", Edad: 23, Poblacion: "Ciudad A" },
          { Nombre: "Patricia", Edad: 37, Poblacion: "Ciudad B" },
          { Nombre: "Miguel", Edad: 29, Poblacion: "Ciudad C" },
          { Nombre: "Lorena", Edad: 24, Poblacion: "Ciudad D" },
          { Nombre: "Raúl", Edad: 38, Poblacion: "Ciudad E" },]
     }),

     
});

</script>