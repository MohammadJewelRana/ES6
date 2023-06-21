
//kisu kisu value nibo sob nibo na etai filtering
const num=[3,5,7,265,5,23,6];
const bigNum=num.filter(x=>x>20);
console.log(bigNum);
const even=num.filter(x=>x%2===0);

const product=[
    {id:1,name:'laptop',price:451200},
    {id:2,name:'mobile',price:1200},
    {id:3,name:'tablet',price:41200},
];
const moreThanThirtyThousand=product.filter(x=>x.price>3000);
console.log(moreThanThirtyThousand);




