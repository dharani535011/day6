// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class movie{
      constructor(movietitle,moviestudio,movierating){
           this.movietitle=movietitle
           this.moviestudio=moviestudio
           this.movierating=movierating

      }
}
let movie1= new movie("mankatha","sunpicture","not PG13") 
console.log(movie1)
