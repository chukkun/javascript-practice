// let s= "Hello Everyone";
// function reverseMethod(s){
//     return s.split(' ').reverse().join(' ');
// }
// console.log(reverseMethod(s));

// let word = "Hi buddy";
// function reverse(word){
//     return word.split(' ').reverse().join(' ');
// }
// console.log(reverse(word));

// ______________

// function findFirstAndLastIndexWithMethods(arr, target) {
//     let firstIndex = arr.indexOf(target);
//     let lastIndex = arr.lastIndexOf(target);
//     return{firstIndex , lastIndex }

// }


// const arr = [5, 2, 3, 5, 7, 5, 8];
// const target = 5;
// console.log(findFirstAndLastIndexWithMethods(arr, target));

// _______________________

// function countEvenOddWithMethods(arr) {
//     const evenCount = arr.filter(num => num % 2 === 0).length;  
//     const oddCount = arr.filter(num => num % 2 !== 0).length;   

//     return { even: evenCount, odd: oddCount };
// }


// const arr = [1, 2, 3, 4, 5, 6];
// console.log(countEvenOddWithMethods(arr)); 

// _____________

// function countOccurrencesWithSplit(s1, s2) {
//     const parts = s1.split(s2);
//     return parts.length - 1; 
// }

// const s1 = "This is a String";
// const s2 = "is";
// console.log(countOccurrencesWithSplit(s1, s2)); 
// _______________

// function findDifferenceWithMethods(arr) {
//     if (arr.length === 0) {
//         return null;
//     }

//     const max = Math.max(...arr); 
//     const min = Math.min(...arr); 

//     return max - min; 
// }


// const arr = [3, 5, 8, 2, 7];
// console.log(findDifferenceWithMethods(arr)); 
// ____________________

// function findSecondMaxWithMethods(arr) {
//     if (arr.length < 2) {
//         return null;
//     }

   
//     const uniqueArr = [...new Set(arr)]; // Remove duplicates
//     uniqueArr.sort((a, b) => b - a); // Sort in descending order

//     return uniqueArr.length > 1 ? uniqueArr[1] : null; // Return second element if it exists
// }

// // Example usage
// const arr = [3, 5, 8, 2, 7];
// console.log(findSecondMaxWithMethods(arr));
// _____________

// function findTopScorerWithMethod(names, scores) {
//     const maxScore = Math.max(...scores);  // Find the maximum score
//     const index = scores.indexOf(maxScore);  // Get the index of the maximum score
//     return names[index];  // Return the student name at that index
// }

// // Example usage
// const names = ["sanjay", "priya", "ramesh", "sanjana"];
// const scores = [88, 45, 71, 91];
// console.log(findTopScorerWithMethod(names, scores)); 

// ______________

// function findFirstNegativeIndexWithMethod(arr) {
//     return arr.findIndex(num => num < 0);
// }

// // Example usage
// const arr1 = [3, 5, 8, -2, 7, 9];
// console.log(findFirstNegativeIndexWithMethod(arr1));

// _____________

