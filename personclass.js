class person{
    constructor(name,age,gender,education,mailid,address,language,nationality,hobbies){
        this.name=name
        this.age=age
        this.gender=gender
        this.education=education
        this.mailid=mailid
        this.address=address
        this.language=language
        this.nationality=nationality
        this.hobbies=hobbies

    }
     detials(){
      return  `this is ${this.name} my age is ${this.age} and my education status is ${this.education} 
        mail Id is ${this.mailid} and my hobbies is ${this.hobbies} contact detials is ${this.address}`
    }
    get educations(){
                 return this.education
    }
    set educations(value){
             return this.education=value
    }

}
let person1=new person("dharani",22,"male","B.E Automobile engineering","dharani535011@gmail.com","indiraganghi street , rajaji nagar , ariyalur ,contact no:5473598743","tamil","indian","bodybuilding")
let person2=new person("dharani S",22,"male","B.E Automobile engineering","dharani535011@gmail.com","indiraganghi street , rajaji nagar , ariyalur ,contact no:5473768743","tamil","indian","playing cricket")
console.log(person1.detials())
person1.educations="full stack developer"
console.log(person1.educations="full stack developer")
console.log(person1.detials())
