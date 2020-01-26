const readline = require("readline-sync");

function nameInput(){
    const name = "Hello hiker!\nIt's a beautiful, overcast day and you are 863 miles from home on the Appalachian Trail. You have come across an entry book to write your name in.\nWhat is your name? " 
    const userName = readline.question(name)
}

nameInput()

inventoryArr = []

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

const enemies = []

function WildEnemyOptions(kind, pace, color, loot){
    this.kind = kind
    this.pace = pace
    this.color = color 
    this.loot = loot
}

var bear = new WildEnemyOptions("Bear", "moves fast", "black", "fur")
var porcupine = new WildEnemyOptions("Porcupine", "moves slow", "brown", "roasting sticks")
var copperhead = new WildEnemyOptions("Copperhead Snake", "moves fast", "brown", "fangs")

enemies.push(bear)
enemies.push(porcupine)
enemies.push(copperhead)

function wildEnemy(){
    const min = 1
    const max = 5
    const random = Math.floor(Math.random() * (max - min)) + min

    if(random === 1){
        console.log(enemies[Math.floor(Math.random() * enemies.length)])
        const attackRun = "You have come across a wild enemy! Are you going to:\n\n[1] attack\n[2] run? "
        const userInput = readline.question(attackRun)
        if(userInput === 1){
            const damageMin = Math.ceil(damageMin)
            const damageMax = Math.floor(damageMax)
            const damageRandom = Math.floor(Math.random() * (max - min)) + min 
            return damageRandom
        } else if(userInput === 2){
            const willDie = Math.random() < 0.5
            const willOutrun = Math.random() > 0.5
            const runOutcome  = 
            // ?????? what the heck am I doing here?
            return runOutcome
        } else {
            console.log('Please select either 1 or 2')
            wildEnemy()
        }
    }
    enemyRevenge()
}

function enemyRevenge(){
    // after the player attacks or runs, the enemy attacks back for a random damage amount

}

funciton inventory(){
    if(user input???  = 'print'){
        console.log(`${userName}, you have ${hp} HP's, and have ${inventoryArr} in your inventory`)
        // have not created values for hp
    }
}

function gainLoot(){
    // if/else? statement to push loot item into array of inventory.... inventoryArr on line 10
}






