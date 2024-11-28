// Selection sort

// let arr = [12, 49, 15, 54, 28, 32, 1, 7];

// for (let i = 0; i < arr.length - 1; i++) {
//     let minIdx = i;
    
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIdx]) {
//             minIdx = j;
//         }
//     }

//     if (minIdx !== i) {
//         [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//     } 
// }

// console.log(arr);

//________________________

function selection(arr){
    let n= arr.length;
      for(i=0;i<n;i++){
        let mid=i
        for(j=i+1;j<n;j++){
            if(arr[j].salary<arr[mid].salary){
                mid=j
            }
        }
        if(mid !==1){
            [arr[i],arr[mid]]=[arr[mid],arr[i]]
        }
      }
      return arr;
}
console.log(selection([
      { name: "Ravi", age: 20, salary: 1000},
      { name: "Anjali", age: 17, salary: 9520 },
       { name: "Priya", age: 19, salary: 6000 },
       { name: "Kumar", age: 21, salary: 2000}]))