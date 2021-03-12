



function maketriangle(){
    for(let i = 0; i < 7; i++){
        for(let b = 0; b < i; b++){
            process.stdout.write("#");
        }
        process.stdout.write("\n");
       
    }
}

maketriangle();