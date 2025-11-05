//map
const ma = (arr)=>{
    const a = arr.map(a=>a+2);
    console.log(a);
};ma([1,2,3,4]);

const re = (arr1)=>{
    const b = arr1.map(n=>n*2);
    console.log(b);
};re([1,2,3,4]);

//filter
const fil = (arr2)=>{
    const c = arr2.filter(n=>n>2);
    console.log(c);
};fil([1,2,3,4]);
const fil1 = (arr2)=>{
    const d= arr2.filter(n=>n%2==0);
    console.log(d);
};fil1([1,2,3,4]);

//reduce
const red = (arr3)=>{
    let tot = arr3.reduce((sum,num)=>sum+num,0);
    console.log(tot);
};red([1,2,3,4]);
const red1 =(arr3)=>{
    let e = arr3.reduce((sum,num)=>sum+num,0);
    console.log(e);
};red1([1,2,3,4]);
