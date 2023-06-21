
//object in array
const users=[
    {
        id:1,
        name:'abul',
        job:'doctor'
    }

]
console.log(users);
console.log(users[0].name);


// array in object
const data={
    count: 5000,
    data:[
        {id:1,name:'abul',job:'leader'},
        {id:2,name:'babul',job:'leader'},

    ]
}
console.log(data);//full object
console.log(data.data[0]);//access array in object
console.log(data.data[0].job);//access array index variable in object


//object in object
const people={
    id:5001,
    name: 'Jewel Rana',
    address:{
        street: {
           lane: "kochukhet",
            road:'mirpur-3',
            house:'Bismillah tower'
        },
        post:'3',
        city:'dhaka'
    }
}
const accessAddress=people.address;
console.log(accessAddress);

//here ? is the optional chaining..that means if that value has then go to the next dot
//otherwise stop
const accessAddressLane=people.address.street?.road;  
console.log(accessAddressLane);



