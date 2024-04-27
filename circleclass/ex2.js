class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
get colour(){
        return this.color
    }
    set colour(value){
        return this.color=value
    }
}
let a= new circle(5,"blue")
a.colour="black"
console.log(a.colour)