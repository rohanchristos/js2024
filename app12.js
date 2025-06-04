let h2=document.querySelector("h2");

function changecolor(color,delay){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
        h2.style.color=color;
        resolve(`${color} is changed`);
        },delay);

    }); 
}

changecolor("red",1000)
.then((result)=>{
    console.log(result);
    return changecolor("green",1000);

})
.then((result)=>{
    console.log(result);
    return changecolor("black",1000);

})

.then((result)=>{
    console.log(result);
    return changecolor("blue",1000);

})

.then((result)=>{
    console.log(result);
    console.log("yellow is the last changed");
    return changecolor("yellow",1000);
});







// changecolor("red",1000,()=>{
//     changecolor("blue",1000,()=>{
//         changecolor("green",1000,()=>{
//             changecolor("pink",1000,()=>{
//                 changecolor("yellow",1000);
//             })
//         })
//     })
// })

// function savetoDB(data){
//     return new Promise((resolved,rejected)=>{
//         let network=Math.floor(Math.random()*10)+1;
//         if(network>5){
//             resolved("sucess:saved to database");
//         }else{
//             rejected("failure:connection weak");
//         }
//     });

// }


// savetoDB("rohan")
// .then(()=>{
//     console.log("saved to database");
// })
// .catch(()=>{
//     console.log("not saved");
// });

//promise chaining

// savetoDB("hello bro")
// .then((result)=>{
//     console.log("data: 1 is saved");
//     console.log(" result of promise is :",result);
//     return savetoDB("hello bro data2");
// })
// .then((result)=>{
//     console.log("data: 2 is saved");
//     console.log(" result of  promise :",result);
//     return savetoDB("bro is saving data 3")
// })
// .then((result)=>{
//     console.log("data: 3 is saved");
//     console.log(" result of  promise :",result);
// })
// .catch((error)=>{
//     console.log("promise is rejected");
//     console.log(" error of  promise :",error);
// });
