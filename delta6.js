//Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”
let str= "abcdabcdefgggh";
let ans="";
function getuniqueelements(str){
    for(const element of str){
        let currStr=element;
        if(ans.indexOf(currStr)==-1){
            ans+=currStr;
        }

    }
    return ans;
}

