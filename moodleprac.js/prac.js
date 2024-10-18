// debugging

// calculateArea();
// greetUser();

// function calculateArea() {
//  const radius = 5;
// //  let area;
//  let area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
//  var userName = "John";
//   console.log(userName);
// }

// ______________________________________________________________

// 
// 2. Why is this loop not stopping?
//  How can you modify the code to ensure the loop counts down properly upto 100?

// let count = 1;
// while (count <= 100) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }

// ___________________________________________________________________

// 3. Why always It's cold outside. is printed irrespective of the temperature value. Fix this!

// let temperature = 30;
// if (temperature == 20) {
//     console.log("It's cold outside.");
//    } else {
//     console.log("It's warm outside.");
//    }

// ___________________________________________________________________________


// 4. Fix the issues in the code so that output is printed correctly


// checkNumber(-5);
// checkNumber(0);

// checkNumber(10, 20);
// function checkNumber(num) {
//   if (num > 0){
//     console.log("Positive");
//   }
//   else if (num < 0) {
//     console.log("Negative");
//   } else {
//     console.log("Zero");
//   }
// }

// ________________________________________________________________________

// 5. Write a function sumNumbers that takes a number n as a parameter and 
// returns the sum of all numbers from 1 to n using a while loop.

// function sumNumbers(n){
//     let i=1;
//     let sum=0;
//     while(i<=n){
//         sum+=i;
//         i++;
//     }
//     console.log(sum);
// }sumNumbers(10);

// ____________________________________________________________________

// 6. Write a function calculateFactorial that takes a number n as a parameter and 
// returns the factorial of that number using a while loop.

// function calculateFactorial(n){
//     let i=1;
//     let factorial = 1;
//     while(i<=n){
//         factorial*=i;
//         i++;
//     }
//     console.log(factorial);
// }
// calculateFactorial(7);

// ________________________________________________________________________

// 7. Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.

// function printEvenNumbers(n){
//     let i=1;
//     while(i<=n){
//         if(i%2==0){
//             console.log(i);
//         }
//         i++;
//     }
// }
// printEvenNumbers(15);

// _________________________________________________________________________

// 8. Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n.
//  However, there is an error in the while loop that causes the function to return the wrong result.
// function sumNumbers(n) {
//   let sum = 0;
//   let i = 0;  while (i < n) {
//     sum += i;
//     i++;
//   }  return sum;
// }

    // function sumNumbers(n) {
    //   let sum = 0;
    //   let i = 0; 
    //   while (i < n) {
    //     sum += i;
    //     i++;
    //   }  return sum;
    // }
    // let result = sumNumbers(6);
    // console.log(result);


// ___________________________________________________________________________

// 9. Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

// If the number is divisible by 3, return "Divisible by 3".
// If the number is divisible by 5, return "Divisible by 5".
// If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
// If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".

function classifyNumber(n){
    
}
