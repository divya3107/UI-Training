class User{
    constructor(){
        console.log("Hello!!!!");
    }
    firstname="divya";
    lastname="DDDD";
    getFullName()
    {
        return this.firstname+this.lastname;
    }
}

class Student extends User{
     constructor(){
         super();
     }
}
//var u= new User();
//console.log(u.getFullName());
console.log(new Student());