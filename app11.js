
let input=document.querySelector("input");
let button=document.querySelector("button");

button.addEventListener("click",function(event){
     let ul=document.querySelector("#taskList");
    let newlist=document.createElement("li");
    let button=document.createElement("button");
    button.classList.add("delete");
    button.innerText="delete";
    const taskText =input.value.trim();
    newlist.innerText=taskText;
    newlist.appendChild(button);
    ul.append(newlist);
});


let ul=document.querySelector("#taskList");
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});



// let deltebtns=document.querySelectorAll(".delete");
// for(btn of deltebtns){
//     btn.addEventListener("click",function(event){
//         let per=this.parentElement;
//         console.log(per);
//         per.remove();
//     });
// }

