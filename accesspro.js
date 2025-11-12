const obj = ()=>{
    const car = {
        name:"Audi",
        year:2025,
        price:10000000,
    };
    console.log(car.name);
    console.log(car.price);
    console.log(car["name"]);
    console.log(car["year"]);
};
obj();