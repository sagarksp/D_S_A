/* 

Pattern 2: Right-Angled Star Triangle
Print a right-angled triangle of stars with n rows.

Output

*
* *
* * *
* * * *

*/

function pattern2 (n){

    for(i=0; i<n;i++){

        let row = " "

        for(j=0; j<i+1; j++){
            row = row + " * "
        }
        console.log(row)
    }
}

pattern2(4)