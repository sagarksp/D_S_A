/*

Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.

Output
      *
    * *
  * * *
* * * *

*/


function pattern6(num){

  for(i=0;i<num;i++){
    let row  = ""
    for (j=0;j<=i;j++){

       row  = row + "*";
    }
console.log(row)
  }
}

pattern6(4);