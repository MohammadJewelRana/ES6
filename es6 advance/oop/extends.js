class TeamMember{
    name; 
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    provideFeedBack(){
        console.log(`${this.name} thank you for your feedback`);
    }
}


class Instructor extends TeamMember{
    designation='Web course Instructor'
    team='web team'
    constructor(name,location){
        super(name,location); //give super and pass to the parent class constructor
    }
    //method
    startSupportSession(time){
        console.log(`start at ${time}`);
    }

}

class Developer extends TeamMember{
    designation='Web course Instructor'
    team='web team'
    tech;
    constructor(name,location,tech){
        super(name,location); //pass to parent class constructor
        this.tech=tech;//access this constructor and assign
    }
    developFeature(feature){
        console.log(`Please develop the feature at ${feature}`);
    }
    release(release){
        console.log(`Please release the version ${release}`);
    }
}

const jewel=new Developer('jewel','dhaka','React');
console.log(jewel);
jewel.provideFeedBack();











