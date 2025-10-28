const year=(x)=>{
    if(x%400==0 || (x%4==0 && x%100!=0)){
        console.log(`${x} is a leap year`);
    }
    else{
        console.log(`${x} is not a leap year`);
    }
}
year(2002);
year(2004);