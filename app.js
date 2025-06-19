// let para=document.querySelector("p");

// para.addEventListener("click",function(){
// console.log("para is clicked");
// });


// let div=document.querySelector(".box");

// div.addEventListener("mouseenter",function(){
// console.dir(this);
// });


// let inputu=document.querySelector("input");
// inputu.addEventListener("keydown",function(){
//  console.log("key pressed");
// });


let form=document.querySelector("form");
 
form.addEventListener("submit",function(e){
    alert("are u ready");
    // e.preventDefault();
    let name=document.querySelector("#name");
    let email=document.querySelector("#email");
    let pwd=document.querySelector("#password");
    console.dir(name);
     console.dir(email);
      console.dir(pwd);
      console.log("deteils of registration !");
    console.log(name.value);
   
    console.log(email.value);
   
    console.log(pwd.value);
});
