// function printStar(n) {
//     for(let i = 1; i <= n; i++) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);

//     }

//     // Reverse print
//     for(let i = n - 1; i >=1; i--) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);
//     }

// }

// function getSpaces(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += " ";
//     }
//     return outputStr;
// }

// function getNumSequence(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += i + " ";
//     }
//     return outputStr;
// }

// printStar(3);




function printStar(n) {
    for(let i=1;i<=n;i++){
        let output = getSpaces(n-i);
        let pattern = getNumSequence(i);
        console.log(output+pattern);
    }

    for(let i=n-1;i>=1;i--){
        let output=getSpaces(n-i);
        let pattern = getNumSequence(i);
        console.log(output+pattern);
    }
}
function getSpaces(n){
    let outputStr= "";
    for(let i=1;i<=n;i++){
        outputStr+= " ";

    }return outputStr;
}

function getNumSequence(n){
    let outputStr= "";
    for(let i=1; i<=n;i++){
        outputStr+=i+ " ";
    }return outputStr;
}

printStar(3);

// function printStar(n) {
//     for (let i = 1; i <= n; i++) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);
//     }

//     for (let i = n - 1; i >= 1; i--) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);
//     }
// }

// function getSpaces(n) {
//     let outputStr = "";
//     for (let i = 1; i <= n; i++) {
//         outputStr += " ";
//     }
//     return outputStr;
// }

// function getNumSequence(n) {
//     let outputStr = "";
//     for (let i = 1; i <= n; i++) {  // Corrected the loop to start from 1 and go up to n
//         outputStr += i + " ";
//     }
//     return outputStr.trim();  // Remove trailing space
// }

// printStar(3);
