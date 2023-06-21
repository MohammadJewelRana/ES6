




// const add=(x,y)=>x+y;
const add=(x=0,y=0)=>x+y;

const mul=(x=0,y=0,z=0)=>{
    const add=x+y;
    const mul=add*z;
    return mul;
}

const res=add();
console.log(res);
const mult=mul(2,2,4);
console.log(mult);

const name="jewel";
const last="Rana";
const fullName=`my name is ${name} ${last}`;
console.log(fullName);

const para=`my
name
is
suad`;
console.log(para);














