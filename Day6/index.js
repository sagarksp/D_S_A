/*
Print n to 1 using recursion
*/

function fun(n){

    if(n==0) return;
    console.log(n)
    n=n-1;
    fun(n)
}
a=5;
fun(a)