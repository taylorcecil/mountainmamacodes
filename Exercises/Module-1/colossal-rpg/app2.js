const readline = require("readline-sync");



function nameInput(){
    const name = "Hello hiker!\nIt's a beautiful, overcast day and you are 863 miles from home on the Appalachian Trail. You have come across an entry book to write your name in.\nWhat is your name? " 
    const userName = readline.question(name)
    
    function Hiker(name, hp){
        this.name = name
        this.hp = 25
    }

    var hiker = new Hiker(userName)
    console.log(hiker)
}

nameInput()

const enemies = []

function WildEnemyOptions(kind, pace, hp, loot){
    this.kind = kind
    this.pace = pace
    this.hp = hp
    this.loot = loot
}

var bear = new WildEnemyOptions("Bear", "moves fast", "11", "fur")
var porcupine = new WildEnemyOptions("Porcupine", "moves slow", "16", "roasting sticks")
var copperhead = new WildEnemyOptions("Copperhead Snake", "moves fast", "19", "fangs")

enemies.push(bear)
enemies.push(porcupine)
enemies.push(copperhead)

function wildEnemy(){
    const min = 1
    const max = 5
    const random = Math.floor(Math.random() * (max - min)) + min
    console.log(random)
    return random
}
wildEnemy()

function hiking(){
    stillHiking = true
    haveDied = false

    while(stillHiking){
        const attackRun = "You have come across a wild enemy! Are you going to:\n\n[1] attack\n[2] run\n"
        const userInput = readline.question(attackRun)
        if(userInput == 1){
            console.log('attack')
        } else if(userInput == 2){
            console.log('run')
            break
        } else {
            console.log('Invalid option')
        }

        if(Hiker.hp == 0){
            console.log('You have died')
            process.exit()
        }
    }
}
hiking()
