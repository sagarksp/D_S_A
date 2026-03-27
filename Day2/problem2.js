//Write a function that returns the larged number in an array....

let arr = [5,0,10,8,17,1]

let maxnumber=arr[0]
function findMax(arr){
for(i=0;i<arr.length;i++){


if(arr[i]>maxnumber){
    maxnumber = arr[i]
    
}

}
return maxnumber
}


console.log(findMax(arr));