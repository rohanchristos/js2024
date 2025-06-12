let add=function sum(a, b) {
    return a + b;
}

let num1=prompt("enter first number");
let num2=prompt("enter second number");
let result=add(num1,num2);
console.log("the sum of two number is "+result);

//function factory
function oddeven(request){
    if(request=="odd"){
        return function isodd(n){
            return (n%2!=0);
        }
    }
    else if (request=="even"){
        return function iseven(n){
            return (n%2==0);
        }
    }else{
        return function invalidRequest(){
            return false; // Default behavior for invalid requests
        }
    }
}

//methods 
const myMath={
     add(a,b){
        return a+b;
    },
    sub:function subin(a,b){
        return a-b;
    }
};
