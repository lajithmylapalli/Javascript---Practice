const sumofdig = (x)=>{
   let y = x.toString().split('').map(Number).reduce((a,b)=>a+b,0);
   console.log(`${y}`)
}
sumofdig(123);