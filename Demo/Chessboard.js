'use strict'

let board = "################";


function chess(a){
    if(a % 2 === 0){
        process.stdout.write("\n");
        for(let i = 0; i < 16; i+=2){
            process.stdout.write(" ");
            process.stdout.write(board[i]);
        }
    }
    else{
        process.stdout.write("\n");
        for(let i = 0; i < 16; i+=2){
            process.stdout.write(board[i]);
            process.stdout.write(" ");
        }
    }
}

for(let i = 1; i < 9; i++){
    chess(i);
}