const repal = ()=>{
    const str = "hello hello hello";
    const out = str.replaceAll("hello","hi");
    console.log((out+"\n").repeat(5));
};
repal();