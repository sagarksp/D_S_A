
/*

Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

Output
1
1 0
1 0 1
1 0 1 0

*/

function pattern7 (num){

    for(i=0;i<num;i++){
        row = ""
        for(j=1;j<=i;j++){
            row = row + j
   
            if(j==0){
                 row = "1"
                
            }
            else{
                 row = "0"
           
            }
        }
     
     
    }
       console.log(row)

}

pattern7(4)