//Finding the second largest number of a given array 

let arr = [4,9,0,2,7,12,11]

let largest  = arr[0];
let secondLargest =0;

function findSecondLargest(arr){

    for(i=0; i<arr.length; i++){

        if(arr[i]> largest){
secondLargest = largest
            largest = arr[i]

        }
        if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest = arr[i]
           console.log(secondLargest)
        }

    }

    return secondLargest;
}

console.log(findSecondLargest(arr))
