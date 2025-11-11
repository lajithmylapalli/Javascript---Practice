const date = ()=>{
    let now = new Date();
    console.log("Year : ",now.getFullYear());
    console.log("Month : ",now.getMonth()+1);
    console.log("date : ",now.getDate());
    console.log("Time : ",now.getTime());
    console.log("Day : ",now.getDay());
    console.log("Hours : ",now.getHours());
    console.log("Minutes : ",now.getMinutes());
    console.log("Seconds : ",now.getSeconds());
};date();