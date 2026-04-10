/*
Print n to 1 using recursion
*/







































function fun(n){
    if(n==0) return;
    console.log(n);
    fun(n-1)
}

console.log(fun(4));