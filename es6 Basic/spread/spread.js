
//array covert into number
//by giving ...
const arr=[6,7,83,7];
console.log(arr);//print array
console.log(...arr);//give number only

const large=Math.max(arr);//showing error because its an array
const largest=Math.max(...arr);//give largest because spread operator converted array to numbers


//copy arrays
//reference tane tai evabe copy korle j kaj e kori sobgualte kaj hoy
const copyArray=arr;
arr.push(55);//when array push its goint to all array becz reference dhore rakhe
console.log(copyArray);
console.log(arr);


//without ref
const newArray1=[45,76,...arr,869,4,3];//val e gula spread hoye newarray te bose jabe
arr.push(56);
console.log(newArray1);
console.log(arr);







