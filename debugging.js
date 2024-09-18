// Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers 
// from 1 to n. However, there is an error in the while loop that causes the function to return the wrong result.


// function sumNumbers(n) {
//     let sum = 0;
//     let i = 0;
//     while (i <= n) {
//       sum += i;
//       i++;
//     }
//     return sum;
//   }
//    console.log(sumNumbers(5) );

// ___________________________________________________________________________________


// function calculateGrade(score) {
//     if (score >= 90) {
//         console.log("Grade: A");
//     } else if (score <= 80) {
//         console.log("Grade: B");
//     } else if (score <= 70) {
//         console.log("Grade: C");
//     } else if (score >= 60) {
//         console.log("Grade: D");
//     } else {
//         console.log("Grade: F");
//     }
// }
  
// ________________________________________________________________________________
// 2. A program that takes a student's score (0-100) and prints the corresponding grade:
// A for 90-100
// B for 80-89
// C for 70-79
// D for 60-69
// F for 0-59


// function calculateGrade(score) {
//     if (score >= 90) {
//         console.log("Grade: A");
//     } else if (score >= 80) {   // Grade B for 80-89
//         console.log("Grade: B");
//     } else if (score >= 70) {   // Grade C for 70-79
//         console.log("Grade: C");
//     } else if (score >= 60) {   // Grade D for 60-69
//         console.log("Grade: D");
//     } else {
//         console.log("Grade: F"); // Below 60 is an F
//     }
// }
// calculateGrade(76); //debug

// ________________________________________________________________________________

// . A program which prints the maximum between 3 variables. 



// let a = 5;
// let b = 10;
// let c = 3;

// if( a > b || a < c) {
//     console.log(a);
// }
// // (b > a && b <  c)
// else if (b > a && b > c) {
//     console.log(b);
// }
// else {
//     console.log(c);
// }

// ____________________________________________________________________________________________________

// Write a program to generate the first 'n=5' terms of the following series 1 4 9 16 25. Debug the program below

// function generateSeries(n) {
//     let str = "";
 
//     for (let i = 1; i <= n; i++) {
// **
//         let term = i ** 2; 
// str+
//         str += term + " ";
//     }
//     return str;
// }
// // Example usage
// let n = 5;

// let result = generateSeries(n);
// console.log(`The first ${n} terms of the series are: ${result}`);

// ____________________________________________________________________


// 5. Given a program print if its a multiple of 7 or not.

// function isMultipleOfSeven(N) {
//     // % 7
//     if (N % 7 === 0) { 
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }

// // Example usage
// let N = 49;
// isMultipleOfSeven(N);


