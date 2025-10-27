const larg = (arr)=>{
    let x = Math.max(...arr);
    let y = Math.min(...arr);
    console.log(`${x} is the largest number in th array`);
    console.log(`${y} is the smallest number in th array`);
};
larg([3,2,5,6,3,2,1,99]);
larg([34,6,2,5,2,2]);