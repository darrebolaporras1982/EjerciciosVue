<template>
<!-- ### Crea una app que haga lo siguiente:

1.  Tendremos varios botones para inicializar la cuenta atrás: 2seg, 5seg, 55seg y 89seg.
2.  Existirá un campo así mismo, en donde se irá visualizando la cuenta atrás hasta llegar a 0.
3.  En cualquier momento el contador se reinicia al pulsar un nuevo botón -->
<h2 class="text-center text-xl font-bold p-5 my-5">Ejercico 3</h2>
<div class="flex flex-col items-center justify-center" @mousemove="posicionDeRaton">
     <p class="my-5" >Crea una app que haga lo siguiente:<br>

1.  Tendremos varios botones para inicializar la cuenta atrás: 2seg, 5seg, 55seg y 89seg.<br>
2.  Existirá un campo así mismo, en donde se irá visualizando la cuenta atrás hasta llegar a 0.<br>
3.  En cualquier momento el contador se reinicia al pulsar un nuevo botón
          </p>
          <div>
               <h2>Cuaneta atrás : {{ this.minutos }} : {{ this.segundos }}</h2>
          </div>
          <div>
               <button class="p-5 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium" @click="iniciaContador(2)">+2</button>
               <button class="p-5 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium" @click="iniciaContador(5)">+5</button>
               <button class="p-5 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium" @click="iniciaContador(10)">+10</button>
               <button class="p-5 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium" @click="iniciaContador(89)">+89</button>
          </div>
          </div>

</template>
<script>
export default{
     data() {
          return {
               segundos:"",
               minutos:""
          }
     },
     methods: {
          iniciaContador(valor){
               if(valor>60){
                    this.segundos=(valor-60);
                    this.minutos=1;
               }else{
                    this.segundos=valor;
               }
               this.cuentaatras();
               
          },
          cuentaatras(){
               setInterval(() => {
                    if(this.segundos!=0&&this.minutos>1){
                         this.segundos--;
                    }else if(this.minutos>0&&this.segundos==0){
                         this.minutos--;
                         this.segundos=59;
                    }else if(this.minutos==0&&this.segundos==0){
                         clearTimeout();
                    }
               }, 1000);
          }
     },
     computed:{
          
     }
}          
</script>