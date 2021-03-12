let diceRoll=[1,6,6,2,3,4,6];

/*function find6(arr, isnum, i){
    for(elem of arr){
        if(isnum(elem, i)){
            console.log((arr.indexOf(elem) + 1) + ":" + elem);
        }
    }    
}
*/
function find6_v1(arr, isnum){
    for(elem of arr){
        if(isnum(elem)){
            console.log(arr.indexOf(elem) + 1 + ":" + elem);
        }
    }    
}

function isnum(elem, i){
    if(elem === i){
        return true;
    }
    else
        return false;
}



//find6(diceRoll, is6);

//find6_v1(diceRoll, function (v){return(v <= 3)});

find6_v1(diceRoll, v => v > 3);