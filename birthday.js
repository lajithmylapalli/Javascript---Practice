const birth = (year)=>{
    let age = new Date().getFullYear()-year;
    console.log(`your age is ${age}`);
};
birth(2004);
birth(2001);
birth(2005);
birth(1947);
birth(1999);