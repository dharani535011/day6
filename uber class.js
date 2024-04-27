class uber{
    constructor(kmdriven){
        this.kmdriven=kmdriven
    }
    get rate(){
        return `Price :${this.kmdriven*4} Ruppes`
    }
}
let ruppes=new uber(40)
console.log(ruppes)
console.log(ruppes.rate)