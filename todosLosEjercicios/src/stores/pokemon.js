import { defineStore } from "pinia";

export const usePokemom = defineStore('pokemon',{

     state:()=>({
          name:"",
          url:"",
          weight:"",
          height:"",
          img:""
     }),
     actions:{
          setUrl(value){
               this.url=value;
          }
     }
})