// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :

// "United States of America"
let country = ["Australia", "Germany", "United States of America"];

function longCountry(arr){
    let longest=0;
    let index=0;
    for(let i=0;i<arr.length;i++){
        let elements=arr[i];
        if(elements.length>longest){
            longest=elements.length;
            index=i;
        }

    }
    return arr[index];
}
