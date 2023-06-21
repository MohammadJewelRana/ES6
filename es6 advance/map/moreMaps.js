const numbers=[3,5,62,6,7];
const divThree=numbers.map(value=>value/3);
console.log(divThree);

//map in string
//get 1st letter of each friends
const friends=['tom','jewel','suad','tua'];
const newFriends=friends.map(f=>f[0]);
console.log(newFriends);

//find length
const nameLength=friends.map(x=>x.length);
console.log(nameLength);


//object

const product=[
    {id:1,name:'laptop',price:451200},
    {id:2,name:'mobile',price:1200},
    {id:3,name:'tablet',price:1200},
];
const items=product.map(product=>product.name);
const price=product.map(product=>product.price);