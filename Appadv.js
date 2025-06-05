async function greet(){
    throw "404 not found";
    return "hello";
}

greet()
.then((result)=>{
    console.log("promise fullfilled :",result);

})
.catch((err)=>{
    console.log("error:",err);

});

let greetarrw= async ()=>{
    return "hello";    
}



let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
        let num=Math.floor(Math.random()*10)+1;
        if(num>7){
            rejected("error and rejected");
        }    
        h1.style.color=color;
        resolve(`${color} is changed`);
        console.log(`${color} is changed`);
        },delay);

    }); 
}

// changecolor("red",1000)
// .then((result)=>{
//     console.log(result);
//     return changecolor("green",1000);

// })
// .then((result)=>{
//     console.log(result);
//     return changecolor("black",1000);

// })

// .then((result)=>{
//     console.log(result);
//     return changecolor("blue",1000);

// })

// .then((result)=>{
//     console.log(result);
//     console.log("yellow is the last changed");
//     return changecolor("yellow",1000);
// });

async function demo() {
    try{
    await changecolor("red",1000);
    await changecolor("pink",1000);
    await changecolor("blue",1000);
    await changecolor("yellow",1000);
    await changecolor("green",1000);
    changecolor("purple",1000);


    }catch(e){
        console.log("i am in the catch block finding any error");
        console.log(e);
    }
    
    console.log(5+5);
    console.log("exiting the blocks");
}







// function randomNumber(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//         },1000);
       
//     });
// }

// async function demo() {
//     await randomNumber();
//     await randomNumber();
//     await randomNumber();
//     await randomNumber();
//     await randomNumber();
//     randomNumber();

    
// }