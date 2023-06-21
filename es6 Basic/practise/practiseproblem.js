
//1.
const multiply=(x,y,z) => x*y*z;
const mul=multiply(5,5,5);
console.log(mul);


//2..
const text=`I am a web developer.
I love to code.
I love to eat biriyani.`;
console.log(text);


//3
const fun=(x,y=2)=>x+y;
const add=fun(2);
console.log(add);

//4
const check=(names)=>{

    const newArray=[];
    for(let i=0;i<names.length;i++){
        // console.log(names[i]);
        if(names[i].length %2==0){
            console.log("even length",names[i]);
            newArray.push(names[i]);
        }

    }
    return newArray;
}

const names=['Suad','Tua','Shahida','nana','nani','amena'];
const res=check(names);
console.log(res);



//5
const  square=(squares)=>{
    const newSquareArray=[];
    let sum=0;
    for(var i=0;i<squares.length;i++){
        const  squareTheArray=Math.pow(squares[i],2);
         sum=sum+ squareTheArray;
        //  console.log(squareTheArray);
         newSquareArray.push(squareTheArray);
    }
    const average=sum/squares.length;
return [newSquareArray,average,sum];
}

const squareArray=[4,6,8];
const [newArray,average,sum]=square(squareArray);
console.log("New array is:: ",newArray);
console.log("Summation is:: ",sum);
console.log("Average is:: ",average);



//6
const max=(arr1,arr2)=>{

    const newArray=arr1.concat(arr2);
    let max=newArray[0];
    for(var i=0;i<newArray.length;i++){
        // console.log(newArray[i]);
        if(newArray[i]>max){
            max=newArray[i];
        }
    }
    return max;
}

const arr1=[3,6,3,523,5,72,12,7,8];
const arr2=[3252,62,25,1,2346346,15,17,326];
const maxValue=max(arr1,arr2);
console.log(maxValue);
