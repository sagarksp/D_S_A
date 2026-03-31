/*

Problem Statement:
Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

Requirements:
Handles both positive and negative integers.
Return 1 if n is 0(since 0 is a single-digit number).
Examples:
Input:259

Output:3

Input:-1035

Output:4

Input:0

Output:1

*/


function countNumber (num){

    let count =0 ;
 
    
    if(!num%2==0){

    count++
    }
    
    console.log(count)
}
  countNumber(123)