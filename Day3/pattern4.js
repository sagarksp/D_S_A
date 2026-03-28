/*

Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
Write a program that prints a right-angled triangle where each row contains the same number repeated.

Output
1
2 2
3 3 3
4 4 4 4

*/

function numbers(n){
    
    for(i=0; i<n; i++){

        let row = " "

        for(j=1;j<=i; j++){
            row = row + i;
        }
        console.log(row)
    }

}

numbers(5)