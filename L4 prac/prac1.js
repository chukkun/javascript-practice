// method for finding maximun num

// let arr =[2, 34, 54, 65, 21];
// let a = Math.max(...arr);
// console.log(a);

//_______
// max num

// let arr =[2, 34, 54, 65, 21];
// let max = arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }console.log(max);

// _______________________________________
// minimum num using methods

// let arr =[2, 34, 54, 65, 21];
// let a = Math.min(...arr);
// console.log(a);

// __________

// let arr =[2, 34, 54, 65, 21];
// let min =arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }console.log(min);

// ________________________________________

// Given an array of strings, find the string which comes first alphabetically without using any library functions. 


// let arr = ["pink" , "black" , "green" , "white"]
// let firstString = arr[0];
// for(let i=1;i<arr.length;i++){
//     let currentString = arr[i];
//     let isSmaller = false;

//     for(j=0;j<Math.min(firstString.length,currentString.length);i++){
//         if(currentString[j]<firstString[j]){
//             isSmaller=true;
//             break;
//         }else if(currentString[j]>firstString[j]){
//             isSmaller=false;
//             break;
//         }
//     }
//     if(!isSmaller&&currentString.lenght<firstString.length){
//         isSmaller=true;
//     }
//     if(isSmaller){
//         firstString=currentString;
//     }
// }console.log(firstString);

// ______________________________________________

// Given an array of strings arr and another string s, check if s in present in arr

// let arr = ["banana", "apple", "cherry", "date"];
// let s = "apple";
// let found = false; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === s) {
//         found = true; 
//         break; 
//     }
// }

// if (found) {
//     console.log(`${s} is present in the array.`);
// } else {
//     console.log(`${s} is not present in the array.`); 
// }

// ________________________________________

// Given a array of integers, count of number of occurrences of the maximum element in the array 

// let arr = [5, 3, 6, 7, 5, 1, 0, 7, 6, 7];
// let max = arr[0];
// let count = 1;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         count = 1;
//     } else if (arr[i] === max) {
//         count++;
//     }
// } console.log(max);
// console.log(count);

// _________________________________________


// let n = 3;

// for (let i = 1; i <= n; i++) {
//     let line = ""; 
//     if (i === 1) {
       
//         line += i + " ".repeat(9) + i; 
//     } else if (i === 2) {
    
//         line += (i + " ").repeat(2) + " ".repeat(4) + (i + " ").repeat(2); 
//     } else {
       
//         line += (i + " ").repeat(6); 
//     }

//     console.log(line.trim()); 
// }

// output;

// 1         1
// 2 2     2 2
// 3 3 3 3 3 3

// _______________________________________

// function prime(num){
//     if(num<=1){
//         return false;
//     }
//     for(i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimesInRange(m, n) {
//     let primes = [];
//     for (let i = m; i <= n; i++) {
//       if (prime(i)) {
//         primes.push(i);
//       }
//     }
// }
// let arr=printPrimesInRange(10,20);
// console.log(arr)
