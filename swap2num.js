//Third problem
const swap = (a,b)=>{
    console.log(`Before swapping a : ${a} and b : ${b}`)
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(`After swapping a : ${a} and b : ${b}`)
};swap(2,3);
swap(8,4);