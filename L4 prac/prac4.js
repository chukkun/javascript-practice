// let arr = [4, 5, 1, 2, 5, 3];
// function findFirstMaxIndex(arr) {

//     let maxIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }
//     return maxIndex;
// }

// console.log(findFirstMaxIndex(arr)); 

// __________________________________________________

// function findElementsLessThan15(arr) {
//     const result = arr.filter(num => num < 15);

//     if (result.length > 0) {
//         console.log(result.join(", "));
//     } else {
//         console.log("No element less than 15");
//     }
// }


// const arr1 = [4, 15, 8, 25, 30];
// findElementsLessThan15(arr1);

// const arr2 = [19, 89, 90, 18];
// findElementsLessThan15(arr2);

// ________________________________________________

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

const arr = [4, 2, 7, 1, 9];
const target = 7;
const result = linearSearch(arr, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found in the array");
}
