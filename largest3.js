const num = (x,y,z)=>{
    if ((x>y) && (x>z)){
        console.log(`${x} is the largest number`);

    }
    else if ((y>x) && (y>z)){
        console.log(`${y} is the largest number`);
        }
        else{
            console.log(`${z} is the largest number`);
        }
}
num(45,67,34)