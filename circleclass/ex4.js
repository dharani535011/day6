class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
    // get area(){
    //     return ((this.radius)*(this.radius)*(3.14))
    // }
    get circumference(){
        return ((this.radius)*(3.14)*(2))
    }
    
}
let circleone = new circle(6,"red")
// console.log(circleone)
console.log(circleone.circumference)