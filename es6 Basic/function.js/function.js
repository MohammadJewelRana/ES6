
// function add(first,second){
//     if(second===undefined){
//         second=0;
//     }
//     return first+second;
// }

// const res=add(5,6);
// const res1=add(5);//without 2nd parameter
// console.log(res);
// console.log(res1);


//give default value
//here first=2...so default value=2
//if function don't pass any parameter then use this default value
//iff pass then use those parameter
function add(first=2,second=0){
    return first+second;
}
const res=add(5,6);
const res1=add(5);//without 2nd parameter
console.log(res);
console.log(res1);




