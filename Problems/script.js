// #01 - Polindrom or Not:

// String that should looks same while reading forward and backward.
// Input:
//      level
// Output:
//      Given value is Polindrom
// Input:
//      habit
// Output:
//      Given value is Not Polindrom

// Answer:

function Polindrom(str){
    // str is original value.
    // In reversed value should store in revStr.
    let revStr = "";
    for(let i = str.length-1; i >= 0; i--){
        revStr += str[i];
    }
    // check the two value str and revStr.
    if(str === revStr){
        console.log("Given value is Polindrom");
    }
    else{
        console.log("Given value is not Polindrom");
    }
    
}
const str = "level";
Polindrom(str);