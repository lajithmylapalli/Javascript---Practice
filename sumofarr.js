const sumofarr = (x)=> {
    let y =x.reduce((a,b)=>a+b,0);
    console.log(`${y}`);
};
sumofarr([2,3,4,1]);