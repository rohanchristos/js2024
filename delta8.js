

let arr=[1,2,3,4];
function printall(e){
    if(e<=0){
        return;
    }
    printall(e-1);
    console.log(e);
}

arr.forEach(printall);
console.log("###############################");
arr.forEach(function printall(e){
    if(e<=0){
        return;
    }
    printall(e-1);
    console.log(e);
});

let objarr=[
    {
        NAME:"rohan ghosh",
        MARKS:98.88
    },
    
    {
        NAME:"soma ghosh",
        MARKS:95
    },

    {
        NAME:"suman ghosh",
        MARKS:90
    }

];
console.log("new signature############");

objarr.forEach((relative)=>{
console.log(relative.NAME);
});