

//1 ==>>map
const oddArray=[1,3,5,7];
const newArray=[];
for(var i=0;i<oddArray.length;i++){
    let val=oddArray[i]+1;
    newArray.push(val);
}
console.log(newArray);
const evenArray=oddArray.map(x=>x+1);
console.log(evenArray);



//2  -->filter
const givenArray=[33,50,79,78,90,102,30];
const divisible=givenArray.filter(x=>x%10===0);
console.log(divisible);


//3....find
const find=givenArray.find(x=>x%10===0);
console.log(find);


//4  reduce
const reduce=givenArray.reduce((pre,newValue)=>pre+newValue,0);
console.log(reduce);


//challenge .......................................................
const people=[
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22}
];
//uisng for loop
let sum=0;
for(var i=0;i<people.length;i++){
    sum=sum+people[i].age;
}
console.log('Using loop ::: Total age sum ::=== ',sum);

//using reduce
const ageTotal=people.reduce((pre,current)=>pre.age+current.age,0);
console.log('Using reduce ::: Total age sum ::=== ',ageTotal);



//
let data={
    location:[
                {
                    latitude:'34.5 ,37.5',
                    longitude: '98.222, 58.7',
                    city:'Hydrabad',
                    country:'India'
                }
    ]
};

const city=data.location[0].city;
console.log(city);


//
const user={
    id:1,
    name:"jewel",
    userNAme:'ishaan',
    email:'js@',
    address:{
        street:'12',
        city:'dhaka',
        geo:{
            lat:'-465.5',
            lng:'5024'
        }
    },
    phone:'024654695',
    company:{
        name:'JS company'
    }
};

const email=user.email;
console.log('Email is :: ',email);
const address=user.address;
console.log("Address is :: ",address);
const city1=user.address.city;
console.log("City is ::",city);
const company=user.company?.name;
console.log("Company name :: ",company);
