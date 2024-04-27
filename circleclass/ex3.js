class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
    get area(){
        return ((this.radius)*(this.radius)*(3.14))
    }
    // get circumference(value){
    //     return this.radius
    // }
    
}
let circleone = new circle(6,"red")
console.log(circleone)
console.log(circleone.area)