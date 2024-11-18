// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.

// function findFirstMaxIndex(arr) {
//     let max = Math.max(...arr);
//     return arr.indexOf(max);
// }
// const arr = [4, 5, 1, 2, 5, 3];
// console.log(findFirstMaxIndex(arr));

// function findFirstMaxIndex(arr) {
//     let max = arr[0];
//     let maxIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//             maxIndex = i;
//         }
//     }

//     return maxIndex;
// }

// // Example usage
// const arr = [4, 5, 1, 2, 5, 3];
// console.log(findFirstMaxIndex(arr)); // Output: 1

// __________________

// Given an array find all the values less than 15 in a new array if not print No Element less than 15.
// Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15

// function findElementsLessThan15(arr) {
//     // Filter elements that are less than 15
//     const result = arr.filter(value => value < 15);

//     // Check if result array is empty
//     if (result.length > 0) {
//         console.log(result.join(", "));
//     } else {
//         console.log("No element less than 15");
//     }
// }

// // Example usage
// const arr1 = [4, 15, 8, 25, 30];
// findElementsLessThan15(arr1); // Output: 4, 8

// const arr2 = [19, 89, 90, 18];
// findElementsLessThan15(arr2); 

// function findElementsLessThan15(arr) {
//     let result = [];
    
//     // Loop through each element and check if it's less than 15
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 15) {
//             result.push(arr[i]);  // Add to result array if element is less than 15
//         }
//     }

//     // Check if result array has any elements
//     if (result.length > 0) {
//         console.log(result.join(", "));
//     } else {
//         console.log("No element less than 15");
//     }
// }

// // Example usage
// const arr1 = [4, 15, 8, 25, 30];
// findElementsLessThan15(arr1); // Output: 4, 8

// const arr2 = [19, 89, 90, 18];
// findElementsLessThan15(arr2); // Output: No element less than 15

// _________________

// linear search

// function linearSearchWithMethod(arr, target) {
//     // Use the findIndex method to find the index of the target element
//     return arr.findIndex(element => element === target);
// }

// // Example usage
// const arr1 = [4, 15, 8, 25, 30];
// console.log(linearSearchWithMethod(arr1, 25)); // Output: 3


// function linearSearch(arr, target) {
//     // Loop through each element in the array
//     for (let i = 0; i < arr.length; i++) {
//         // If the current element matches the target, return the index
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     // If the loop completes without finding the target, return -1
//     return -1;
// }

// // Example usage
// const arr2 = [4, 15, 8, 25, 30];
// console.log(linearSearch(arr2, 25)); // Output: 3


// ________________

// function findMaxLengthString(arr) {
//     return arr.reduce((maxStr, currentStr) => {
//         return currentStr.length > maxStr.length ? currentStr : maxStr;
//     });
// }

// // Example usage
// const arr1 = ["Ram", "Abraham", "Peter"];
// console.log(findMaxLengthString(arr1)); 

// function findMaxLengthString(arr) {
//     let maxStr = arr[0]; // Assume the first string is the longest initially

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > maxStr.length) {
//             maxStr = arr[i]; // Update maxStr if a longer string is found
//         }
//     }

//     return maxStr;
// }

// // Example usage
// const arr2 = ["Ram", "Abraham", "Peter"];
// console.log(findMaxLengthString(arr2)); // Output: "Abraham"

//_______________________

// In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg
//  arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali

// function findStringsStartingWithA(arr) {
//     return arr.filter(str => str[0].toLowerCase() === 'a');
// }

// // Example usage
// const arr1 = ["apple", "Ali", "mango", "Brush"];
// console.log(findStringsStartingWithA(arr1).join(", ")); // Output: apple, Ali

// function findStringsStartingWithA(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i][0].toLowerCase() === 'a') {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// // Example usage
// const arr2 = ["apple", "Ali", "mango", "Brush"];
// console.log(findStringsStartingWithA(arr2).join(", ")); // Output: apple, Ali

// ____________________

// Reverse a string without using library functions.

// function reverseStringWithMethod(str) {
//     return str.split("").reverse().join("");
// }

// // Example usage
// const originalString = "Hello";
// console.log(reverseStringWithMethod(originalString)); // Output: "olleH"


// function reverseString(str) {
//     let reversed = "";

//     // Loop through the string from the last character to the first
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// // Example usage
// const originalString = "Hello";
// console.log(reverseString(originalString)); // Output: "olleH"

// ______________

// Given an array of strings, return the string which has maximum 'a' character present in it.  
// eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it


// function findMaxAStringWithMethod(arr) {
//     return arr.reduce((maxStr, currentStr) => {
//         const currentCount = currentStr.split("").filter(char => char.toLowerCase() === 'a').length;
//         const maxCount = maxStr.split("").filter(char => char.toLowerCase() === 'a').length;

//         return currentCount > maxCount ? currentStr : maxStr;
//     });
// }

// // Example usage
// const arr2 = ["apple", "appeal", "after", "banish"];
// console.log(findMaxAStringWithMethod(arr2)); // Output: "appeal"

// function findMaxAString(arr) {
//     let maxACount = 0;
//     let maxAString = "";

//     // Loop through each string in the array
//     for (let i = 0; i < arr.length; i++) {
//         let currentCount = 0;

//         // Count 'a' characters in the current string
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j].toLowerCase() === 'a') {
//                 currentCount++;
//             }
//         }

//         // Update maxAString if current string has more 'a's
//         if (currentCount > maxACount) {
//             maxACount = currentCount;
//             maxAString = arr[i];
//         }
//     }

//     return maxAString;
// }

// // Example usage
// const arr1 = ["apple", "appeal", "after", "banish"];
// console.log(findMaxAString(arr1)); // Output: "appeal"

// _____________

// Traverse the array and return the index of the first negative number encountered.


// function findFirstNegativeIndexWithMethod(arr) {
//     return arr.findIndex(num => num < 0);
// }

// // Example usage
// const arr1 = [3, 5, 8, -2, 7, 9];f
// console.log(findFirstNegativeIndexWithMethod(arr1)); // Output: 3

// const arr2 = [3, 5, 8, 7, 9];
// console.log(findFirstNegativeIndexWithMethod(arr2)); // Output: -1

// function findFirstNegativeIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             return i;  // Return the index of the first negative number
//         }
//     }
//     return -1;  // Return -1 if no negative number is found
// }

// // Example usage
// const arr1 = [3, 5, 8, -2, 7, 9];
// console.log(findFirstNegativeIndex(arr1)); // Output: 3

// const arr2 = [3, 5, 8, 7, 9];
// console.log(findFirstNegativeIndex(arr2)); // Output: -1

// _______________

// Given array two arrays student names and scores, return the student name who has the maximum score 
// eg names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

// function findTopScorerWithMethod(names, scores) {
//     const maxScore = Math.max(...scores);  // Find the maximum score
//     const index = scores.indexOf(maxScore);  // Get the index of the maximum score
//     return names[index];  // Return the student name at that index
// }

// // Example usage
// const names = ["sanjay", "priya", "ramesh", "sanjana"];
// const scores = [88, 45, 71, 91];
// console.log(findTopScorerWithMethod(names, scores)); // Output: sanjana


// function findTopScorer(names, scores) {
//     let maxScore = scores[0];
//     let topStudent = names[0];

//     // Loop through the scores to find the maximum score and corresponding student
//     for (let i = 1; i < scores.length; i++) {
//         if (scores[i] > maxScore) {
//             maxScore = scores[i];
//             topStudent = names[i];
//         }
//     }

//     return topStudent;
// }

// // Example usage
// const names = ["sanjay", "priya", "ramesh", "sanjana"];
// const scores = [88, 45, 71, 91];
// console.log(findTopScorer(names, scores)); // Output: sanjana

// ___________________

// Find the second maximum in an array of integers

// function findSecondMaxWithMethods(arr) {
//     if (arr.length < 2) {
//         return null; // If there are fewer than 2 elements, return null
//     }

//     // Sort the array in descending order and pick the second unique maximum
//     const uniqueArr = [...new Set(arr)]; // Remove duplicates
//     uniqueArr.sort((a, b) => b - a); // Sort in descending order

//     return uniqueArr.length > 1 ? uniqueArr[1] : null; // Return second element if it exists
// }

// // Example usage
// const arr = [3, 5, 8, 2, 7];
// console.log(findSecondMaxWithMethods(arr)); // Output: 7

// function findSecondMax(arr) {
//     if (arr.length < 2) {
//         return null; // If there are fewer than 2 elements, return null
//     }

//     let max = -Infinity; // Initialize the maximum value to negative infinity
//     let secondMax = -Infinity; // Initialize the second maximum value to negative infinity

//     // Loop through the array to find the maximum and second maximum
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             secondMax = max; // Update second maximum
//             max = arr[i]; // Update maximum
//         } else if (arr[i] > secondMax && arr[i] < max) {
//             secondMax = arr[i]; // Update second maximum
//         }
//     }

//     return secondMax === -Infinity ? null : secondMax; // If secondMax is not updated, return null
// }

// // Example usage
// const arr = [3, 5, 8, 2, 7];
// console.log(findSecondMax(arr)); // Output: 7

// _____________________________

// Print the different between the maximum and minimum element in a given array. 

// function findDifferenceWithMethods(arr) {
//     if (arr.length === 0) {
//         return null; // If the array is empty, return null
//     }

//     const max = Math.max(...arr); // Find the maximum element
//     const min = Math.min(...arr); // Find the minimum element

//     return max - min; // Return the difference between max and min
// }

// // Example usage
// const arr = [3, 5, 8, 2, 7];
// console.log(findDifferenceWithMethods(arr)); // Output: 6 (8 - 2)


// function findDifference(arr) {
//     if (arr.length === 0) {
//         return null; // If the array is empty, return null
//     }

//     let max = arr[0];
//     let min = arr[0];

//     // Loop through the array to find the maximum and minimum values
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]; // Update max if a larger element is found
//         } 
//         if (arr[i] < min) {
//             min = arr[i]; // Update min if a smaller element is found
//         }
//     }

//     return max - min; // Return the difference between the max and min
// }

// // Example usage
// const arr = [3, 5, 8, 2, 7];
// console.log(findDifference(arr)); // Output: 6 (8 - 2)

// ______________________________

// Count the number of occurrences of a string s2 in a string s1. 
// For example s1 = "This is a String" s2 = "is", number of occurences is 2. 

// function countOccurrencesWithSplit(s1, s2) {
//     const parts = s1.split(s2); // Split s1 by occurrences of s2
//     return parts.length - 1;  // The number of occurrences is one less than the number of parts
// }

// // Example usage
// const s1 = "This is a String";
// const s2 = "is";
// console.log(countOccurrencesWithSplit(s1, s2));  // Output: 2


// function countOccurrences(s1, s2) {
//     let count = 0;
//     let position = 0;

//     // Loop to find occurrences of s2 in s1
//     while ((position = s1.indexOf(s2, position)) !== -1) {
//         count++;  // Increment count when s2 is found
//         position++;  // Move the position forward to continue searching
//     }

//     return count;
// }

// // Example usage
// const s1 = "This is a String";
// const s2 = "is";
// console.log(countOccurrences(s1, s2));  // Output: 2

// ________________________

//  Given an array of integers, count how many numbers are even and how many are odd.

// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }

// function countEvenOddWithMethods(arr) {
//     const evenCount = arr.filter(num => num % 2 === 0).length;  // Filter even numbers and count
//     const oddCount = arr.filter(num => num % 2 !== 0).length;   // Filter odd numbers and count

//     return { even: evenCount, odd: oddCount };
// }

// // Example usage
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(countEvenOddWithMethods(arr)); // Output: { even: 3, odd: 3 }

// function countEvenOdd(arr) {
//     let evenCount = 0;
//     let oddCount = 0;

//     // Loop through the array and count even and odd numbers
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenCount++; // Increment even count if the number is even
//         } else {
//             oddCount++;  // Increment odd count if the number is odd
//         }
//     }

//     return { even: evenCount, odd: oddCount };
// }

// // Example usage
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(countEvenOdd(arr)); // Output: { even: 3, odd: 3 }

// _____________________

// Given an array of integers and a target element, find the indices of its first and last occurrence.

// Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
// Example Output: { firstIndex: 0, lastIndex: 5 }

// function findFirstAndLastIndexWithMethods(arr, target) {
//     const firstIndex = arr.indexOf(target);  // Find the first occurrence
//     const lastIndex = arr.lastIndexOf(target); // Find the last occurrence

//     return { firstIndex, lastIndex };
// }

// // Example usage
// const arr = [5, 2, 3, 5, 7, 5, 8];
// const target = 5;
// console.log(findFirstAndLastIndexWithMethods(arr, target)); // Output: { firstIndex: 0, lastIndex: 5 }

// function findFirstAndLastIndex(arr, target) {
//     let firstIndex = -1;
//     let lastIndex = -1;

//     // Loop through the array
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             if (firstIndex === -1) {
//                 firstIndex = i;  // Set firstIndex when first occurrence is found
//             }
//             lastIndex = i;  // Keep updating lastIndex for every occurrence
//         }
//     }

//     return { firstIndex, lastIndex };
// }

// // Example usage
// const arr = [5, 2, 3, 5, 7, 5, 8];
// const target = 5;
// console.log(findFirstAndLastIndex(arr, target)); // Output: { firstIndex: 0, lastIndex: 5 }

// _________________________

// Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”

// function reverseWordsWithMethods(s) {
//     // Split the string into words, reverse the array, and join them back into a string
//     return s.split(' ').reverse().join(' ');
// }

// // Example usage
// const s1 = "hello everyone";
// console.log(reverseWordsWithMethods(s1));  // Output: "everyone hello"

// const s2 = "i love programming very much";
// console.log(reverseWordsWithMethods(s2));  // Output: "much very programming love i"



// function reverseWords(s) {
//     let words = [];
//     let currentWord = '';

//     // Loop through the string to split it into words manually
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') {
//             if (currentWord !== '') {
//                 words.push(currentWord);
//                 currentWord = ''; // Reset currentWord to start building the next word
//             }
//         } else {
//             currentWord += s[i]; // Append character to current word
//         }
//     }

//     // Push the last word if there's any left
//     if (currentWord !== '') {
//         words.push(currentWord);
//     }

//     // Reverse the array of words and join them to form the reversed string
//     let reversedString = '';
//     for (let i = words.length - 1; i >= 0; i--) {
//         reversedString += words[i] + ' ';
//     }

//     // Remove the trailing space and return the result
//     return reversedString.trim();
// }

// // Example usage
// const s1 = "hello everyone";
// console.log(reverseWords(s1));  // Output: "everyone hello"

// const s2 = "i love programming very much";
// console.log(reverseWords(s2));  // Output: "much very programming love i"

// ______________________






















