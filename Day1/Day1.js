//Q1 - Search for an element in an array that returns the index of the element if found, otherwise returns -1.

var arr = [4,2,0,10,8,30];

function searchIndexes(arr,num){
    for(i=0;i<arr.length;i++){
        
        if(arr[i] == num){
            console.log(i)
            return num;
        }
      
    }
      return -1
}

console.log(searchIndexes(arr,10));