const prime = (num)=>{
    for (let i=2;i<=num;i++){
        let prime = true;
        for(let j=2;j<Math.sqrt(i);j++){
            if(i%j==0){
                prime=false;
                break;
            }
        }
       if(prime){
        console.log(i);
       } 
    }
};prime(23);