// Dates 
let mydate = new Date()
 console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toUTCString());

console.log(typeof mydate);
// interveiw question date is a object

let mycreatedate = new  Date(2023,4,4)
console.log(mycreatedate.toDateString());

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(`${mycreatedate.getDay()} and the time `);



let newDte = new Date()
console.log(newDte);

newDate.toLocaleDateString('default',{
    weekday:  "long"
    t
})
