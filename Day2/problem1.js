//Write a function that returns the number of negative number in a array

let arr = [2,-9,17,0,1,-10,-4,8]

function finder(arr){

    let num = 0
    for(i=0; i<arr.length; i++){
        if(arr[i]<0){
            num++
           console.log(arr[i]) 

        }

    }
   
    console.log(num)
}

console.log(finder(arr))