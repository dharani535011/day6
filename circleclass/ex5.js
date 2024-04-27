class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }

 }
 circle.prototype.toString =function(){
    return `colour: ${this.color} 
radius: ${this.radius}`
 }
let circleone = new circle(1,"red")
console.log(circleone.toString())
