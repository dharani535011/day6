// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie{
    constructor(movietitle,moviestudio,movierating="PG"){
         this.movietitle=movietitle
         this.moviestudio=moviestudio
         this.movierating=movierating

    }
}
let movie1= new movie("mankatha","sunpicture") 
console.log(movie1)