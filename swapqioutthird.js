const swap = (x,y)=>{
    console.log(`before swapping x : ${x} and y : ${y}`)
    x=x+y;
    y=x-y;
    x=x-y;
    console.log(`After Swapping x : ${x} and y : ${y}`);
};
swap(21,3);
swap(8,9);
swap(56,7);