/*

Print 1 to n using recursion

*/

num = 1;
n=5
let copy = n
function fun(n){

    if(num>copy) return ;
 
console.log(num)
   num=num+1;
    n=n-1
    fun(n)
    
}

fun(n)