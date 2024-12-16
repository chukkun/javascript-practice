// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
    // Write your code here
        function findGCD(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    function findLCM(x, y) {
        return (x * y) / findGCD(x, y);
    }

    let lcmA = a[0];
    for (let i = 1; i < a.length; i++) {
        lcmA = findLCM(lcmA, a[i]);
    }

    let gcdB = b[0];
    for (let i = 1; i < b.length; i++) {
        gcdB = findGCD(gcdB, b[i]);
    }

    let count = 0;
    for (let x = lcmA; x <= gcdB; x += lcmA) {
        if (gcdB % x === 0) {
            count++;
        }
    }

    return count;
}


// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
    // Write your code here
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxCount =0;
    let minCount =0;
    for(let i=1;i<scores.length;i++){
        if(scores[i]>maxScore){
            maxScore=scores[i];
            maxCount++
        }
        else if(scores[i]<minScore){
            minScore = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount];
    

}
