// 1. Given a number of 7 digits, print the sum of the digits of the number. 
 
// let num=1234567;
// sum=1;
// while(num>0){
//     a = num%10;
//     sum*=a;
//     num=Math.floor(num/10);
// }
// console.log(sum);

// 2. Add the above code in a function digitSum(num) . It should return the sum of the digits of the number.

// let num1=1234567;
// sum=0;
// function digitSum(num1){

// while(num1>0){
//     a = num1%10;
//     sum+=a;
//     num1=Math.floor(num1/10);
// }return sum;
// }
// console.log( digitSum(num1));


// 3. Given an array of names of people, add the length of the array as the first element in the array.


// let namee=["chukkun" , "kavi" , "karthu" , "sri"];
// let a = namee.length;
// namee.unshift(a);
// console.log(namee);


// 4.  Given a string "Freshworks, Global Infocity, Perungudi, Chennai - 600096", print the address on 4 different lines.
//   Expected Output:
//   Freshworks
//   Global Infocity
//   Perungudi
//   Chennai - 600096


// let address ="Freshworks, Global Infocity, Perungudi, Chennai - 600096";
// let a=address.split(", ");
// for(i=0; i<a.length;i++) {
//     console.log(a[i]);
// }


// 5. Given a year in the variable exampleYear, write a program to check whether it is a leap year or not.
// Print "Y" if it's a leap year and "N" if it's a common year.
// Sample Input :
// 2020
// Sample Output :
// Y

// let sample =2020;
// if(sample%4==0 || sample%100==0){
//     console.log("y");
// }
// else{
//     console.log("N");
// }
  

// 6. Print the first power of 5 that is greater than 10000.

// let r=5;
// for(i=1;r<10000;i++){
//     r*=5;
    
// }
// console.log(r);

// let n=5;
// while(n<10000){
//     n*=5
// }console.log(n)  //another method.


// 7. Print the sum of all even numbers between a and b. if a = 5, and b = 10
//  then it should print 24.
// Hint: Between 5 and 10 there is 6, 8 and 10 and their sum is 24

// let a=5;
// let b=10;
// let sum = 0;
// for(i=a;i<=b;i++){
//     if(i%2==0){
//         sum+=i;
     
// }

// }console.log(sum);
