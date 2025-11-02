const second = (arr)=>{
    let a = arr.sort((a,b)=>b-a);
    if(a.length<2){
        return null;
    }
    else{
        console.log(`${a[1]}`);
        return a;
    }
};
second([9,8,7,6,5,4,3,2,1]);
