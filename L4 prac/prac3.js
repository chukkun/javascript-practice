// Find the first occurrence of 13 and stop the code

// let arr = [5, 8, 13, 21];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 13) {
//     console.log("Found 13!"); 
//   }
// }

// _____________________________

// Find the maximum in an array:

// let arr=[55,67,89,45];
// function findMax(arr) {
//   let max = arr[0]; 
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }console.log(findMax(arr));

// ________________________________

// Finding lexically first string. 

// let arr=["apple","mango","cherry","grapes"];
// function findAlphabeticallyFirst(arr) {
//   let first = arr[0]; 
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < first) {
//       first = arr[i];
//     }
//   }
//   return first;
// }console.log(findAlphabeticallyFirst(arr))

// ___________________________________

// Debug Binary search code:

// let arr=[44,55,65,23,78,89,34];
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
  
//   while (left <= right) {  
//     let mid = Math.floor((left + right) / 2);
    
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
  
//   return -1;  
// }
// console.log(binarySearch(arr,78));

// _____________________________________


