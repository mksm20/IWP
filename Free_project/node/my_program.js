'use strict'

let arr = [1, 3, 4, 2, 5, 2, 3, 5, 6, 4, 3, 2, 1, 2, 2];
const readline = require('readline');

function pair(array_of_num, num_of_pair, number_to_compare, number_to_compare_2){
    let value, hans = [];
    if(num_of_pair === 1){ 
        value = helper(array_of_num, number_to_compare, array_of_num.length -1, 0) * number_to_compare;
        return value;    
    }
    if(num_of_pair > 1){
        let not_compare = 0;
        hans[0] = helper(array_of_num, number_to_compare, array_of_num.length, not_compare);
        not_compare += hans[0];
        hans[1] = helper(array_of_num, number_to_compare_2, array_of_num.length, not_compare);
        return hans;
    }
}

function helper(array_of_num, number_to_compare, i, not_compare){
    let k = 0;
    if(number_to_compare === 0){
        k = array_of_num[i];
        return k;
    }
    if(array_of_num[i] === array_of_num[i-1] && array_of_num[i] != not_compare){
        k = helper(array_of_num, --number_to_compare, --i, not_compare);
        if(k != 0){
            return k;
        }
    }
    else if(i > 0){
        k = helper(array_of_num, number_to_compare, --i, not_compare);
        if(k != 0){
            return k;
        }
    }
    else{
        return k;
    }
    
}



arr.sort(function(a, b){return a-b});
console.log(arr);
run_game(arr);

function run_game(arr){
    let sentinel = false;
    while(!sentinel){
        const readline = require('readline');
        let num_of_pair, number_to_compare, number_to_compare_2 = 0;
        console.log("Enter num of pairs as int, 0 to exit:\n");
        num_of_pair = readline();
        if(num_of_pair === 0){
            sentinel = true;
        }
        console.log("Enter number of comparisons:\n");
        number_to_compare = readline();
        if(num_of_pair > 1){
            console.log("Enter number of comparisons for second num");
            number_to_compare_2 = readline();
        }
        console.log(pair(arr, num_of_pair, number_to_compare, number_to_compare_2));
    }
}