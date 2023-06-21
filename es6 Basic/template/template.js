
//3 ways to declare string
const person='jewel';
const person2="Jewel";
const person3=`Jewel`;

//multiline
// ` `  ==carat//bactrick
//use to write multiline
const multiline=`first line
        second line
        third line
     `;

const a=20;
const b=30;
const summary='sum of :'+a+'and'+b+'is :'+(a+b); //write manually

//using template string
const newSummary=`sum of  ${a} and ${b} is : ${a+b}`;
console.log(newSummary);

//find array length using template
const arr=[3,4,5,6];
const len=`Length is ${arr.length}`;
console.log(len);












