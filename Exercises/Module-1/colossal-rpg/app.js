const readline = require("readline-sync");

// a hiker is hiking along a trail, he writes name in an entry book (capture name for later) , and he keeps hiking - hike(). while hiking, he has a 1/4 chance of being attacked by a wildEnemy() - WildEnemyOptions(). If a wildEnemy() appears, the hiker can choose to [1] attack or [2] run. If the hiker chooses to attack, thre will be a random amount of damage dealt between a min and a max. If the hiker decides to run, there will be a 50% chance of escaping. after the hiker either attacks or runs, the enemy will attack back for a random damage amount. if the hiker kills the wild enemy, then the hiker is assigned some HP (health points) and an item that is stored in the inventory. If the enemy kills the hiker, the console will print a death message and the game will end. At any time during the game, the hiker can enter 'print' into the console, and the console will print the hikers name, HP, and items in their inventory.

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

