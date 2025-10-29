const dup = (arr)=>{
    let unique = [...new Set(arr)];
    console.log(`${unique}`);
};
dup([1,23,12,34,11,1,1,1,12,343,12]);
dup([1,2,1,2,1,2,3,4,3,4,3,5,4,5,6]);