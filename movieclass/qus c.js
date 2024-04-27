// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class movie{
        constructor(movietitle,moviestudio,movierating="PG"){
             this.movietitle=movietitle
             this.moviestudio=moviestudio
             this.movierating=movierating
    
        }
        static pgmovie(movies){
            return movies.filter(movie => movie.movierating=="PG")
        }
    }
    let movies =[
        new movie("movie 1","studio a" ,"PG"),
        new movie("movie 2","studio b","PG"),
        new movie("movie 3","studio c","PG-13")
    ]
    let pgmovies=movie.pgmovie(movies)
    console.log(pgmovies)