const obj = ()=>{
    const city={
        name:"chennai",
        population:11500000,
        avgtemp:30,
        state:"tamil nadu"
    };
    console.log(city.name);
    console.log(city["population"]);
    console.log(city.avgtemp);
    console.log(city["state"]);
    city.name="vizag";
    city["population"]=2400000;
    city.avgtemp=29;
    city["state"]="Andhra Pradesh";
    console.log(city["name"]);
    console.log(city.population);
    console.log(city["avgtemp"]);
    console.log(city.state);
    city.name="Hyderabad";
    city["population"]="Hyderabad";
    city.avgtemp=26.6;
    city["state"]="Telengana";
    console.log(city);
    
};obj();