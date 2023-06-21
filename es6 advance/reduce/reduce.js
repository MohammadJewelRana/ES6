
//callback fun =>> two parameter
//initail value parameter

//here 0=iniital value
//works like a sum function
//sum need initial value sum=0...its like this work
const num=[3,5,7,265,5,23,6];
const total=num.reduce((previous,current)=>previous+current,0);
console.log(total);


const items=[
    {id:1,name:'alta',price:100,},
    {id:2,name:'cosmetics',price:500,},
    {id:3,name:'jhimka',price:200,}
];

 const itemTotal=items.reduce((previous,current)=>previous+current.price,0);
 console.log(itemTotal);




