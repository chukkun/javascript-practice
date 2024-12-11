// <!-- https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true -->

function aVeryBigSum(ar) {
    // Write your code here
    let sum =0;
    for(let i=0;i<ar.length;i++){
        sum+=ar[i];
    }
    return sum;

}

// <!-- https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true -->

function diagonalDifference(arr) {
    // Write your code here
      let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

   
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonalSum += arr[i][i]; 
        secondaryDiagonalSum += arr[i][arr.length - i - 1]; 
    }

   
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

// <!-- https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true -->

function plusMinus(arr) {
    // Write your code here
        const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

   
    console.log((positiveCount / n).toFixed(6));
    console.log((negativeCount / n).toFixed(6));
    console.log((zeroCount / n).toFixed(6));

}

// <!-- https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true -->

function staircase(n) {
    // Write your code here
     for (let i = 1; i <= n; i++) {
        const spaces = ' '.repeat(n - i);
        const hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

// <!-- https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true -->

function miniMaxSum(arr) {
    // Write your code here
        let totalSum = 0;
    let minElement = arr[0];
    let maxElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
        else if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    const minSum = totalSum - maxElement;
    const maxSum = totalSum - minElement;

    console.log(minSum, maxSum);
}

// <!-- https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true -->

function birthdayCakeCandles(candles) {
    // Write your code here
       let maxHeight = 0;
       let sum = 0;
       for(let i=0; i < candles.length; i++ ){
        if(candles[i]>maxHeight){
            maxHeight = candles[i];
            sum=1;
        }else if (candles[i] === maxHeight){
            sum++;
        }
       }
    return sum;
    
    
}

// <!-- https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true -->

function timeConversion(s) {
    // Write your code here
     let hour = parseInt(s.slice(0, 2));
    const minutes = s.slice(3, 5); 
    const seconds = s.slice(6, 8); 
    const period = s.slice(8); 

    if (period === 'AM') {
        if (hour === 12) hour = 0;
    } else if (period === 'PM') {
        if (hour !== 12) hour += 12; 
    }
    const formattedHour = hour.toString().padStart(2, '0');
    return `${formattedHour}:${minutes}:${seconds}`;
}

