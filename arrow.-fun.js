 function hello(){
    console.log('hello');
}
hello();
function name(name,age){
    {console.log(`hi ${name}`);
console.log(`your ${age} years old`);}
}name('lajith',34)

const his=()=>console.log('How are you');                                    // arrow function
his();
const a = (name) => console.log(`hello ${name}`);
a('lajith');
const b = (name) => console.log(`hi ${name}`);
b('lajith');
const c = (name,age) => {console.log(`hi ${name}`)
                  console.log(`you are ${age} old`)};
c('lajith', 21);

setTimeout( () => console.log('hi'),3000);                                 //setTimeout
setTimeout(function hello(){ console.log("hello")},5000);
setTimeout(()=>console.log('lajith'),3000);
setTimeout(k,6000);
    function k(){ console.log('lajith');
}
setTimeout(e,9000)
function e(){
console.log('hello');
}                                                                      
setTimeout(()=>console.log('lajith'),1000); 



const nums = [1,2,3,4,5,6];                                                  //add
const add = nums.map(n=>n+2); 
console.log(add);

const sub = nums.map(n=>n-1);                                               //sub
console.log(sub);

const mul = nums.map(n=>n*2);                                                //mul
console.log(mul);

const div = nums.map(n=>n/2);                                                //div
console.log(div);

const mod = nums.map(n=>n%2)                                                //mod
console.log(mod);

 
 const num = [1,2,3,4,5,6];
const above1 = num.filter(n=>n>1);                                         //above1
console.log(above1);


const below6 = nums.filter(n=>n<6);                                      //below6
console.log(below6);                          

const lajith= [35,56,65,32,76,78];                                          //comparision
const oo=lajith.filter(n=>n>50);
console.log(oo);

const ooo=lajith.filter(n=>n<50);
console.log(ooo);                                                

const val=[1,2,3,4];                                                          //reduce
const tot = val.reduce((total,current) => total + current,0);
console.log(tot);