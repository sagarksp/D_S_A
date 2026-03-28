//Pattern 1: Print nxn Star Square
//Print a square pattern of stars (*) of size n x n.

//      Output
//      * * * *
//      * * * *
//      * * * *
//      * * * *


function squarepattern (n){

    for(i = 0 ; i<n ; i++){
    let row = " "

        for(j= 0 ; j<n ; j++){
            row = row + "*"
        }
        console.log(row)
    }
}

console.log(squarepattern(4))