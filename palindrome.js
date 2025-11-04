const pal = (x)=>{
    const y = x.split('').reverse().join('');
    if(x==y){
        console.log(`${x} is a palindrome`);
    }
    else{
        console.log(`${x} is not a palindrome`);
    }
};
pal('malayalam');
pal('hello');
pal('12321');