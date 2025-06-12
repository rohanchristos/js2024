// let arr=[1,2,3,4];
// let p=arr.reduce((acc,el)=>acc+el);
// console.log("here is the answer "+ p);

let arr=[1,12,13,14,15,16,17,18,19,2,3,4,5,6,100];
let max=arr.reduce((acc,el)=>{
    if(el>acc){
        acc=el;
    }
    return acc;
});

console.log("maximum in arry is "+max);



let obj={
    name:"rohan",
    roll:"190"
};
console.log(obj);

let objcopy={...obj,id:1233233};
console.log(objcopy);
