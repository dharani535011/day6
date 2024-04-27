class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
    get radii(){
        return this.radius
    }
    set radii(value){
        return this.radius=value
    }
   
}
let circleone = new circle(1,"red")
console.log(circleone)
console.log(circleone.radii=5)