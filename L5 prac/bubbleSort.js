// ASC order

// Integer

//  function bubblesort(arr){ 
//        let totalSwap=0;
//      let n =arr.length;
//      for (let i = 0; i < n; i++) {
//      for (let j = 0; j < n - i - 1; j++) {
//          if(arr[j]>arr[j+1]){
//              [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//                totalSwap++;
//          }
        
        
//      }
    
//  }
//  console.log(totalSwap);
//  return arr; 
//  };
//  console.log(bubblesort([19,25,13,45,58,5]));

// __________________________

// string

// function bubblesort(arr){ 
//     let totalSwap = 0;
//     let n =arr.length;
//     for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//             totalSwap++;
//         }
        
        
//     }
    
// }
// console.log("TotalSwap =", totalSwap)
// return arr; 
// };
// console.log(bubblesort(["Apple","Mango","Grape","Orange","Banana"]));



// function bubblesort(arr){ 
//     let n =arr.length;
//     for (let i = 0; i < n; i++) {
//     for (let j = i+1; j < n ; j++) {
//         if(arr[i]>arr[j]){
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//         }
        
        
//     }
    
// }
// return arr; 
// };
// console.log(bubblesort(["Apple","Mango","Grape","Orange","Banana"]));


// ____________________________

// function bubblesort(arr) {
//     let n = arr.length;
//     let swapCount = 0; 

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 swapCount++; 
//             }
//         }
//     }

//     console.log("Total Swaps:", swapCount);
//     return arr; 
// }

// console.log(bubblesort(["Apple", "Mango", "Banana", "Grape", "Orange"]));

// _____________________

// Define an array of Student objects

// const students = [
//     { name: "Sankar", age: 18, mark: 85 },
//     { name: "Ravi", age: 20, mark: 90 },
//     { name: "Anjali", age: 17, mark: 95 },
//     { name: "Priya", age: 19, mark: 88 },
//     { name: "Kumar", age: 21, mark: 80 }
// ];
// function bubbleSortByAge(array) {
//     const n = array.length;
//     for (let i = 0; i < n ; i++) {
//         let swapped = false;
//         for (let j = i+1; j < n ; j++) {
//             if (array[i].mark > array[j].mark) {
//                 [array[i], array[j ]] = [array[j ], array[i]];
//                 swapped = true;
//             }
//         }
//         if (!swapped) break;
//     }
// }
// bubbleSortByAge(students);
// console.log("Sorted by age:", students);

// ______________________

// Define an array of Student objects
// const students = [                                                                                                                                                                                                                                                                                                                                                                                                                                                   
//     { name: "Sankar", age: 18, mark: 85 },
//     { name: "Ravi", age: 20, mark: 90 },
//     { name: "Anjali", age: 17, mark: 95 },
//     { name: "Priya", age: 19, mark: 88 },
//     { name: "Kumar", age: 21, mark: 80 }
// ];
// function bubbleSortByAge(array) {
//     const n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         // let swapped = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (array[j].age > array[j + 1].age) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//                 swapped = true;
//             }
//         }
//         // if (!swapped) break;
//     }
// }
// bubbleSortByAge(students);
// console.log("Sorted by age:", students);

// ____________________________
