//8th problem
const big=(a,b,c)=>{
    if(a>b&&a>c){
        console.log(`${a}is greater`)
    }
    else if(b>a&&b>c){
        console.log(`${b}is greater`)
    }
    else{
        console.log(`${c} is greater`);
    }
};big(4,5,6);
big(99,102,76);
big(1010,9999,10000);