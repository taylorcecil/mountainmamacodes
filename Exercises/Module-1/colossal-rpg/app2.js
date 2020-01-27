const readline = require("readline-sync");




function nameInput(){
    const name = "Hello hiker!\nIt's a beautiful, overcast day and you are 863 miles from home on the Appalachian Trail. You have come across an entry book to write your name in.\nWhat is your name? " 
    const userName = readline.question(name)
    return userName
}




function Hiker(name){
    this.name = name
    this.hp = 25
    this.loot = []
}

const hiker = new Hiker(nameInput())


function takeHit(char, damage){
    char.hp = char.hp - damage
}




function randomAmount(min, max){
    const random = Math.floor(Math.random() * (max - min)) + min
    return random
}

const enemies = []
function WildEnemyOptions(kind, pace, hp, loot){
    this.kind = kind
    this.pace = pace
    this.hp = hp
    this.loot = loot
}



const bear = new WildEnemyOptions("Bear", "moves fast", "11", "fur")
const porcupine = new WildEnemyOptions("Porcupine", "moves slow", "16", "roasting sticks")
const copperhead = new WildEnemyOptions("Copperhead Snake", "moves fast", "19", "fangs")

enemies.push(bear)
enemies.push(porcupine)
enemies.push(copperhead)





function printHikerDetails(){
    console.log(`${hiker.name}, you have ${hiker.hp} health points, and have ${hiker.loot} in your inventory`)
}




function fighting(hiker, enemy){
    var stillFighting = true
    console.log("You have come across a wild enemy!\n")
    while(stillFighting){
        const attackRun = "Are you going to:\n\n[1] attack\n[2] run\n"
        const userInput = readline.question(attackRun)
        if(userInput == 1){
            var enemyTakesDamage = randomAmount(1, 7)
            takeHit(enemy, enemyTakesDamage)
            console.log(`You hit your enemy for ${enemyTakesDamage} health points`)
            if(enemy.hp > 0){
                console.log(`Your enemy has ${enemy.hp} health points`)
                var hikerTakesDamage = randomAmount(1, 5)
                takeHit(hiker, hikerTakesDamage)
                console.log(`You have taken a hit of ${hikerTakesDamage} health points`)
                console.log(`You now have ${hiker.hp} health points`)
                if(hiker.hp <= 0){
                    console.log('You have died')
                    process.exit()
                }
            } else {
                hiker.hp = hiker.hp + 5
                hiker.loot.push(enemy.loot)
                stillFighting = false
                console.log("You have killed off your enemy! Whew, that was a close one. You can continue on your journey.\n")
            }
        } else if(userInput == 2){
            if(randomAmount(0, 2) == 0){
                stillFighting = false
                console.log("You have escaped! You can continue on your adventures.\n")
            } else {
                console.log("Sorry, you couldn't get away\n")
            }
        } else if(userInput === 'print'){
            printHikerDetails()
        } else {
            console.log('Invalid option\n')
        }
    }
}





function hiking(){
    var stillHiking = true
    console.log("Great! You've signed the entry book.")
    
    while(stillHiking){
        const userHikes = "Please enter a 'h' to keep hiking: "
        const hikeInput = readline.question(userHikes)
        if(hikeInput === 'h'){
            const beingAttacked= randomAmount(1, 5);
            if(beingAttacked==1){
                const enemy = enemies[randomAmount(0, 3)]
                fighting(hiker, enemy)
            } else {
                console.log('It is a beautiful day for hiking')
            }
        } else if(hikeInput === 'print'){
            printHikerDetails()
        } else {
            console.log("Sorry, you did not input 'h'. Try again")
        }
    }
}
hiking()