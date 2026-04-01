/*

Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

Output
1
1 0
1 0 1
1 0 1 0

*/


function pattern7(num){
    
    for(i=0; i<num ; i++){
        let toggle =  1;
        let row  = "";
    
        for(j=0; j<=i; j++){
            row = row + toggle;

            toggle = toggle === 1?0:1;
        }
        console.log(row)
    }

}

pattern7(4);