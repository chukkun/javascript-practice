// function fizzbuzz(n){
//     for(let i=1;i<=n;i++){
//         if(i%3===0 && i%5===0){
//             console.log("Fizz Buzz");
//         }
//         else if(i%3===0){
//              console.log("Fizz");
//         }
//         else if(i%5===0){
//             console.log("Buzz");
//        }
//        else{
//         console.log(i);
//        }

//     }
// } fizzbuzz(100)

 // ____________________________________________________

//  prime numbers
 

//  function prime(n){
//     if(n<=1){
//         return false;
//     }
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(i%2===0){
//           return false;
//         }
//     }return true;
//  } console.log(prime(3));

//  ____________________________________________________

// primenumber in array


// let arr=[88, 95,46,48,26];
// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(num);i++){
//                 if(num%2===0){
//                   return false;
//                 }
//     }return true;
// }
// for( let j=0;j<arr.length;j++){
//     let num=arr[j];
//     if(isPrime(num)){
//         console.log(num+"is prime");
//     }
//     else{
//         console.log(num+"is not prime");
//     }
// }

// prime number short code_______________________

// let num=49;
// let isPrime=true;
// for(i=2;i<=Math.sqrt(num);i++){
//     if(num%i===0){
//         isPrime=false;
//     }
// }
//     if(isPrime&&num>1){
//         console.log(num+"is a prime number");
//     }
//     else{
//         console.log(num+"is not a prime number");
//     }


// ___________________________________________________

// LCM

// function lcm(a,b){
//     let max =Math.max(a,b);
//     for(i=max;i<=a*b;i++){
//         if(i%a===0&&i%b===0){
//             console.log(i);
//           break;
//         }
//     }
// } lcm(6,2)

// ______________________________
// GCD

// function Gcd(a,b){
//         let max =Math.min(a,b);
//         for(i=max;i>0;i++){
//             if(a%i===0&&a%i===0){
//                 console.log(i);
//               break;
//             }
//         }
//     } Gcd(7,9)