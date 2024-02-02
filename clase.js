class Peliculas{

     #titulo;
     #premio;
     #year;

     constructor(titulo,premio,year){
          this.#titulo=titulo;
          this.#premio=premio;
          this.year=year;
     }

     get titulo(){
          return this.#titulo;
     }

     get premio(){
          return this.#premio;
     }
     
     get year(){
          return this.#year;
     }

     set titulo(titulo){
          this.#titulo=titulo;
     }
     set premio(premio){
          this.#premio=premio;
     }
     set year(year){
          this.#year=year;
     }

     toString(){
          return "La pelicula "+titulo()+" ha sido ganadora del premio "+premio()+" en el año "+year()+"!!";
     }

     addPelicula(objeto){
          array.push(objeto);
          console.log("el objeto se ha añadido");
     }

}