/*

Print 1 to n using recursion

*/

function fun(num){
   

    if(num <1) return;
   
    fun(num-1)
     console.log(num)
}
console.log(fun(4))