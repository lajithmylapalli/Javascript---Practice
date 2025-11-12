const obj = ()=>{
    const city = {
        pername:"lajith",
        name:"vizag",
        temp:26,
        population:2400000
    };
    const clone = {...city};
    console.log(city.pername);
    clone.pername="ram";
    console.log(clone.pername);
    clone.name="chennai";
    console.log(city["name"]);
    console.log(clone["name"]);
    clone.temp=30;
    console.log(city.temp);
    console.log(clone.temp);
    clone.population=150000000;
    console.log(city.population);
    console.log(clone["population"]);
};obj();