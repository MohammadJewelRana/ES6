
 
const output=[];

for(const number of numbers){
    const doubled=number*2;
    output.push(doubled);

}
console.log(output);

const numbers=[45,236,46,7,3];
const doubleIt=(x)=>x*2;
const makeDouble=numbers.map(doubleIt);
console.log(makeDouble);


// const numbers=[45,236,46,7,3];
// const makeDouble=numbers.map( x=>x*2);
// console.log(makeDouble);

const fiveTimes=[1,4,5,2,6].map(x=>x*2);






