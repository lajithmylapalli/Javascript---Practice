let fruits=['apple','mango','banana'];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
fruits.push('orange');
console.log(fruits.length);
fruits.shift();
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits.pop();
console.log(fruits.length);
console.log(fruits[0],fruits[1]);
fruits.unshift('gova');
console.log(fruits[0],fruits[1],fruits[2]);
fruits.forEach((fruit,index)=>{
    console.log(`${index} : ${fruit}`);
})