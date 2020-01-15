const readline = require("readline-sync");

// console.log("UH OH! You are locked in a dark room that has a hole in the wall. In order to escape the room, look for a key in the room to open the door. What would you like to do? Choose from the following: Put hand in hole, find the key, or open the door: ")

function getInput(question){
    return readline.question(question)
}

function escape(){
    const option = getInput("UH OH! You are locked in a dark room that has a hole in the wall. In order to escape the room, look for a key in the room to open the door. What would you like to do? Choose from the following: Put hand in hole, find the key, or open the door: ")


    if(option === "put hand in hole"){
        console.log("OOPS, you put your hand in the hole and a dragon bit it off. You have died.")
    }
    else if(option === "find the key"){
        console.log("WHEW! You found the key to escape. Congratulations.")
    }
    else if(option === "open the door"){
        console.log("Slow down partner! You need to find the key first.")
    }
}

escape()