/*

Pattern 3: Print a Right-Angled Number Triangle
Write a program that prints a right-angled triangle of numbers of heightn.

Output
1
1 2
1 2 3
1 2 3 4

*/

function numbers(n){
    
    

    for(i=0; i<n; i++){

        let row = " "

        for(j=1;j<=i; j++){
            row = row + j;
        }
        console.log(row)
    }

}

numbers(5)
