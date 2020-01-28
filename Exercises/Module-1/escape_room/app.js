const readline = require("readline-sync");

function promptInput(){
    const prompt = "Choose from the following:\n 1. Put hand in hole\n 2. Find the key\n 3. Open the door\n"
    return readline.question(prompt)
}


function escape(){
    var stillAdventuring = true;
    var foundKey = false;

    console.log("UH OH! You are locked in a dark room that has a hole in the wall. In order to escape the room, look for a key in the room to open the door.\nWhat would you like to do? ")

    while(stillAdventuring) {

    const option = promptInput()
        
        if(option == 1){
            console.log("OOPS, you put your hand in the hole and a dragon bit it off. You have died.")
            stillAdventuring = false
        } 
        else if(option == 2){
            console.log("WHEW! You found the key to escape. Now you need to open the door.")
            foundKey = true
        }
        else if(option == 3){

            if(foundKey === true){
                console.log("You have escaped! Congratulations.")
                stillAdventuring = false
            }
            else {
                console.log("Slow down partner! You need to find the key first.")
            }
        } 
    }
}

escape()




