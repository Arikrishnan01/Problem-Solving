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

// function Polindrom(str){
//     // str is original value.
//     // In reversed value should store in revStr.
//     let revStr = "";
//     for(let i = str.length-1; i >= 0; i--){
//         revStr += str[i];
//     }
//     // check the two value str and revStr.
//     if(str === revStr){
//         console.log("Given value is Polindrom");
//     }
//     else{
//         console.log("Given value is not Polindrom");
//     }
    
// }
// const str = "level";
// Polindrom(str);

// #02 - Digit Count:

// Count the given value digits.
// Input:
//      12345
// Output:
//      5
// Input:
//      01
// Output:
//      2

// Answer:

// function DigitCount(numbers){
//     if(numbers === 0) return 1;

//     let count = 0;

//     while(numbers > 0){
//         numbers = Math.floor(numbers / 10);
//         count++;
//     }
//     return count;
// }

// const numbers = 12345;
// console.log(DigitCount(numbers)); 
