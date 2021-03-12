'use strict'
let strings = ["Hejsa", "med", "dig!", "store", "lille", "uhada"];


function length(strings){
    let result = 0, i = 0;
    for(i = 0; i < strings.length; i++){
        result += strings[i].length;
    }
    return(result/i);
}

console.log(length(strings));