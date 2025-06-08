let func= ()=>{
    console.log("hello");
}

let square= n =>(n*n);

let i=0;

let id=setInterval(() => {

    i++;

    console.log("hello world!",i,id);


}, 2000); 

setTimeout(() => {

    clearInterval(id);

    console.log("killed the process");

}, 10000);