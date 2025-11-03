//Write a program to check if a number is prime.

const prime = (num)=>{
    if(num<=1){
        console.log(`${num} is not a prime number`);
       return num;
    }
    if(num%2==0){
    console.log(`${num} is not a prime number`);
    return num;
    };
    for(let i=2;i<num;i++)
    {
        if(num%i==0){
            console.log(`${num} is not a prime number`);
            return num;
        }
    }
    console.log(`${num} it is a prime number`);
};prime(23);
prime(-1);
prime(-2);