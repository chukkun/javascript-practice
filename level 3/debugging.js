// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) { 
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printTriangle(n);

// _____________________________________________________________

// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b; 
//         a = temp;  
//     }
//     return a;
// }

// // Example usage
// let a = 48, b = 18;
// console.log(gcd(a, b));  // Expected output: 6

// ___________________________________________________________

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <Math.sqrt(num); i++) {
//         if (num % i === 0) { 
//             return false;
//         }
//     }
//     return true;
// }

// // Example usage
// let num = 29;
// console.log(isPrime(num));  // Expected output: true

// _______________________________________________________

// function printHollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n || j===1 ||j===n ) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printHollowSquare(n);

// ____________________________________________________________________


