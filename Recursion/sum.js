// 1 + 2 + 3 + 4 + 5..............n 

function sums(n){
    if(n===0) return 0;
        let reuslt = n + sums(n-1)
        console.log(reuslt + " = " + n + " + " + sums(n-1))
        return reuslt
}
sums(5)


