//Reverse a string (e.g., “hello” → “olleh”).
let name = "HELLO";
const rev = ()=>{
    let reverse = name.split('').reverse().join('');
    console.log(reverse);
};rev();

//reverse array
let arr = [2,3,4,5];
const revarr = ()=>{
    let ar = arr.reverse();
    console.log(ar);
};revarr();

//sum array
let s = [1,2,3,4];
let n=0;
const sum=()=>{
    
    for(let i = 0 ;i<s.length;i++){
        n+=s[i];
    }
    console.log(n);
};sum();