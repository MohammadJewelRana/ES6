
// const phone=fish.phone;
// console.log(phone);
const fish={
    name: 'king hilsha',
    address: 'chandpur',
    phone:'024132.2',
    price:4000
}
//declare all variable as it is in object and access it easily
const {name,address,phone,price}=fish; //here fish is a object
console.log(name);


const {age,name1}={name1:'jewel',age:40};
console.log(age);



//array destructuring
const [first,second]=[44,99,66,35];
console.log(first);

const nayoks=['salib','bappi','raj'];
const [king,lost,notun]=nayoks;
console.log(notun);


//return multiple value as an array
function getNames(){
    return ['Alim','Halim'];
}
const [baba,chacha]=getNames();







