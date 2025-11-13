const obj=()=>{
    const city = {
        pername:"Lajith",
        name:"vizag",
        avgtemp:26.6,
        population:2400000,
    };
    for(let key in city){
        console.log(key+" : "+city[key]);
    }
    console.log('pername' in city);
    console.log('Lajith' in city);
};obj();