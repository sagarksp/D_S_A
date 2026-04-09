/*
    Removing duplicates from an array
*/

let a = [0,0,1,1,1,2,2,3,3,4]


let x = 0;
for(i = 0; i<a.length; i++){

    if(a[i] > a[x]){
        x++;
        a[x] = a[i]
    }

}
console.log(a)