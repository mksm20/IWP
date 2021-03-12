'use strict'

let msgBoard = {
    boardName: '',
    userName: [],
    messages: [],
    putMessage: function(variable, variable2){this.messages.push(variable);this.userName.push(variable2)}, 
    printMessage: function(i){console.log(this.messages[i])},
    register: function(f){}
}

function MessageBoard(input){
    this.boardName = input;
    this.userName = [];
    this.messages = [];
    this.putMessage = function(variable, variable2){this.messages.push(variable),this.userName.push(variable2)}; 
    this.printMessage = function(i){console.log(this.messages[i])};
    this.register = function(f){};
}





let lars = new MessageBoard("opgave regning");

lars.putMessage("hej", "lars");
lars.printMessage(0);

let bente = new MessageBoard("snakke");

bente.putMessage("lol", "bent");
bente.printMessage(0);
console.log(bente.userName[0]);