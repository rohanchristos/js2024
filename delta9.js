console.log("hello testing...  test sucsess! ");

let arr=[1,2,3,4,5,6,7];

let newarr= arr.map((e)=>{
    return e*2;

});
console.log("done!  you can check by using newarr");

let even=arr.filter((e)=>{
    return e%2==0;
} );
console.log("done! try to print even");