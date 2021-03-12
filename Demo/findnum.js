'use strict'

let array = [3, -1, 43, 23, 12, 32, 4, 54, 12 , 3, 123, 4, 54, 1];

findnum(array);

function findnum(array){
    let small = [array[0], array[1], 0];
    if(small[1] < small[0]){
        small[2] = small[0];
        small[0] = small[1];
        small[1] = small[2];
    }
    for(let i = 2; i < array.length; i++){
        if(array[i] < small[0]){
            small[1] = small[0]
            small[0] = array[i];
        }
        else if(array[i] < small[1]){
            small[1] = array[i];
        }
    }
    console.log(small[0]);
    console.log(small[1]);
}
