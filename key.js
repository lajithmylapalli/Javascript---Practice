const obj=()=>{
    const city= {
        pername:"lajith",
        name:"chennai",
        avgtemp:30,
        population:15000000,
        state:"Tamil Nadu"
    };
    console.log(city.pername+" ios living in "+city.name);
    city.pername="kamal";
    city["name"]="vizag";
    city["population"]=2400000;
    city.avgtemp=6.6;
    city.state="Andhra Pradesh";
};obj();