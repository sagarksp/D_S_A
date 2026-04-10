//Write a function that returns the larged number in an array....

let arr = [5,0,10,8,17,1]


function large(arr){

    let largenum = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>largenum){
            largenum = arr[i]
        }
    }
    console.log(largenum)
}

large(arr)