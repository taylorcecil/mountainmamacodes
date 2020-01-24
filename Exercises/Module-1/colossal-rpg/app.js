const readline = require("readline-sync");

function nameInput(){
    const name = "Hello hiker!\nYou are 863 miles from home on the Appalachian Trail. You have come across an entry book to write your name in.\nWhat is your name? " 
    return readline.question(name)
}

nameInput()

function hike(){
    const userHikes = "Great! You've signed the entry book. Please enter a 'h' to keep hiking: "
    const hikeInput = readline.question(userHikes)

    if(hikeInput === 'h'){
        wildEnemy()
    } else {
        console.log("Sorry, you did not input 'h'. Try again")
        hike()
    }
}

hike()

function wildEnemy(){
    const min = 1
    const max = 5
    const random = Math.floor(Math.random() * (max - min)) + min

    if(random === 1){
        console.log(enemies[Math.floor(Math.random() * enemies.length)])
    }
}

const enemies = []

function WildEnemyOptions(kind, pace, color){
    this.kind = kind
    this.pace = pace
    this.color = color
}

var bear = new WildEnemyOptions("Bear", "moves fast", "black")
var porcupine = new WildEnemyOptions("Porcupine", "moves slow", "brown")
var copperhead = new WildEnemyOptions("Copperhead Snake", "moves fast", "brown")

enemies.push(bear)
enemies.push(porcupine)
enemies.push(copperhead)



