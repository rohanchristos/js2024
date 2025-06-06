//elements larger than a number num
let arr=[23,45,1,2,3,67,8,9,3,4,5];


 let num=prompt("give number");

function getelEments(arry,number){
    let list=[];
    for(let i=0 ;arry.length > i ; i++){
        if(arr[i]>number){
             list.push(arr[i]);
        }
}  
return list;
}


