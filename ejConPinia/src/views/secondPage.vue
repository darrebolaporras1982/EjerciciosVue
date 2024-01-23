<template>
    
     <h3>segunda pagina</h3>
     <h3>esta es la seleccion anterior {{ actual }}</h3>
</template>
<script>
import { useStoreMusica } from '@/stores/StoreMusica.vue';
import { mapState } from 'pinia';

export default{
     data() {
          return {
               actual:seleccion
          }
     },
     computed:{
          ...mapState(useStoreMusica,["tiendaDeMusica","seleccion"])
     },
}
</script>