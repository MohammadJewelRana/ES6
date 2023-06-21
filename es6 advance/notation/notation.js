

const product=[
    {id:1,name:'laptop',price:451200},
    {id:2,name:'mobile',price:1200},
    {id:3,name:'tablet',price:41200},
];

//two way
//dot
//bracket
const pName=product[0].name;//dot nation

//bracket notatio 
//way-1
const pName1=product[0]['name'];//bracket notation
console.log(pName1);
//way2
const price='price';
const pPrice=product[0].price;
console.log(pPrice);