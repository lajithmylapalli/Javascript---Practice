const to = (arr)=>{
    console.log(arr);
    arr.push('orange');
    console.log(arr);
    arr.pop();
    console.log(arr);
    console.log(arr.includes('apple'));
    console.log(arr.indexOf('apple'));
};
to(['apple','banana','mango']);
const num =(hi)=>{
    console.log(hi.join(' '));

};num([1,2,3,4,5]);
const str = (ti)=>{
    console.log(ti.split(''));
};str('hello');