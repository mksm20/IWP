'use strict'


let arr = [1, 4, 5, 2, 56, 6, 2, 1, 2];
let key = 0;

for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            arr[i] = key;
            arr[i] = arr[j];
        }
    }
}

console.log[arr];