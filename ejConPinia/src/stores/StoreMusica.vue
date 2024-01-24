<script>
import { defineStore } from 'pinia'
export const useStoreMusica = defineStore('StoreMusica', {
  state: () => ({
    tiendaDeMusica: [
      {
        producto: 'Guitarra eléctrica',
        marca: 'Fender',
        tipo: 'Stratocaster',
        precio: 1000
      },
      {
        producto: 'Teclado MIDI',
        marca: 'Akai',
        modelo: 'MPK Mini',
        precio: 150
      },
      {
        producto: 'Amplificador de bajo',
        marca: 'Ampeg',
        modelo: 'SVT-CL',
        precio: 1200
      },
      {
        producto: 'Micrófono de condensador',
        marca: 'Audio-Technica',
        modelo: 'AT2020',
        precio: 150
      },
      {
        producto: 'Baquetas de batería',
        marca: 'Vic Firth',
        modelo: '5A',
        precio: 10
      },
      {
        producto: 'Bajo eléctrico',
        marca: 'Ibanez',
        tipo: 'SR500',
        precio: 800
      },
      {
        producto: 'Sintetizador analógico',
        marca: 'Moog',
        modelo: 'Minimoog Model D',
        precio: 3500
      },
      {
        producto: 'Cuerdas de guitarra acústica',
        marca: "D'Addario",
        tipo: 'Phosphor Bronze',
        precio: 12
      },
      {
        producto: 'Afinador cromático',
        marca: 'Korg',
        modelo: 'Pitchblack',
        precio: 50
      },
      {
        producto: 'Pedal de efectos',
        marca: 'Boss',
        modelo: 'DS-1 Distortion',
        precio: 70
      },
      {
        producto: 'Piano digital',
        marca: 'Yamaha',
        modelo: 'P-125',
        precio: 800
      },
      {
        producto: 'Caja de ritmos',
        marca: 'Roland',
        modelo: 'TR-8S',
        precio: 600
      },
      {
        producto: 'Violín',
        marca: 'Stentor',
        modelo: 'Student II',
        precio: 300
      }
    ],
    seleccion:"",
  }),
  actions:{
    valorizar(variable){
      this.seleccion=variable;
      alert("funcion ejecutada,valor "+this.seleccion);
    }
  }
})

</script>
