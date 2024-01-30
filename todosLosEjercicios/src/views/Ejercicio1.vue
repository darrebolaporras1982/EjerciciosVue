<template >
     <!-- Crea un aplicación que haga lo siguiente:

1.  Muestre un boton que incremente un valor de 2 en 2.
2.  Muestre una caja de texto que nos permita iniciar el contador activándose en el evento keyup.
3.  Muestre en un párrafo los vales de las posiciones x e y cuando desplazamos el ratón por dicho párrafo. -->
<h2 class="text-center text-xl font-bold p-5 my-5">Ejercico 1</h2>
<div class="flex flex-col items-center justify-center" @mousemove="posicionDeRaton">
     <p class="my-5" >
          Crea un aplicación que haga lo siguiente: <br>

1.  Muestre un boton que incremente un valor de 2 en 2. <br>
2.  Muestre una caja de texto que nos permita iniciar el contador activándose en el evento keyup.<br>
3.  Muestre en un párrafo los vales de las posiciones x e y cuando desplazamos el ratón por dicho párrafo.<br>
     </p>
     <div class="my-5">
          <button class="p-5 bg-blue-100 hover:bg-blue-200 hover:shadow-lg border rounded-lg text-lg font-medium" @click="incrementa">Incrementa +2</button>
     </div>
     <div class="text-3xl font-semibold p-5 my-5" >{{ this.valor }}</div>
     <input v-model="rest" type="text" name="" id="" class="p-5 border rounded-lg shadow-xl" @keyup="reset(rest)" >
     <div >
          <p class="mx-4 p4 ">la posicion de X es:<span class="text-xl font-serif font-bold">{{ this.x }}</span></p>
          <p class="mx-4 p4 ">la posicion de Y es:<span class="text-xl font-serif font-bold">{{ this.y }}</span></p>

     </div>
</div>

</template>
<script>
     export default{
          data() {
               return {
                    valor:0,
                    rest:"",
                    x:"",
                    y:""
               }
          },
          methods:{
               incrementa(){
                    
                    this.valor+=2;
               },
               reset(reset){
                    this.valor=parseInt(reset);
                    this.rest="";
               },
               posicionDeRaton(event){
                    this.x=event.pageX;
                    this.y=event.pageY;
               }
          },
          computed:{
               
          }
     }
</script>