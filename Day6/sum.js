/*
Sum of first natural number

1+2+3+4+5.........

reverse kr lege 
5+4+3+2+1..
*/

function sum(n){
    
    if(n==0) return 0;

    return n + sum( n - 1 );
}
console.log(sum(5));
