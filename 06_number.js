const num = 400
console.log(num);
const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));


const othernumber = 24.4546474

console.log(othernumber.toPrecision(7));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//---------------- maths----------------------


console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.6));

console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4.6,3,4,6,7,8));


console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10

const max = 20


console.log(Math.floor(Math.random()*(max-min+1))+ min);


