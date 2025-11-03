//Check if a number is prime or not
let num = 111;
const prime =()=>{

    for (let i=2;i<num;i++){
        if (num%i==0)
        {
            console.log('It is not a prime number');
            return num;
        }

    }
    console.log('It is a prime number');
};prime();
