//syntactic sugar
//class template/structure
class Instructor{
    //property
    name;
    designation='Web course Instructor'
    team='web team'
    location;
    
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    //method
    startSupportSession(time){
        console.log(`start at ${time}`);
    }

}

//create object
const  jewel=new Instructor('jewel','mirpur');
console.log(jewel);
jewel.startSupportSession('9.00');




