// Write a function that returns the smallest number in a array....

let arr = [0,2,5,7,-2,-1]
let smallest = arr[0]

function findMin (arr){

    for(i=0; i<arr.length; i++){

        if(arr[i]<smallest){
            smallest = arr[i];

        }
    }
    return smallest;
}

console.log(findMin(arr))

