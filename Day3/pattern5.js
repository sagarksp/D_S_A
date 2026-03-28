/*

Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

Output
1 2 3 4
1 2 3
1 2
1

*/


function reverseNumber(n){

    for( i=n ; i>=0 ; i-- ){

        let row  = " "

        for( j=1 ; j<=i;j++){
            row = row + j;
        }

        console.log(row)
    }
}

reverseNumber(4)