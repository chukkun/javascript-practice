// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleCount = 0 ;
    let orangeCount = 0;
    for(let i=0;i<apples.length;i++){
        let aadd = a+ apples[i];
        if(aadd>=s && aadd<=t){
            appleCount++;
            
        }
        
    }
    for(let i=0;i<oranges.length;i++){
        let badd = b+oranges[i];
        if(badd >=s && badd <= t){
            orangeCount++;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);

}

// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true


function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if(v1 === v2){
        return x1 === x2 ? "YES" : "NO" ;
    }
    if((x2-x1) % (v1-v2) === 0 && (x2-x1) / (v1-v2) > 0){
        return "YES";
    }
    else{
        return "NO";
    }
         
    

}

