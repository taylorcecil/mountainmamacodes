var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(array1, array2){
    for(var i = 0; i < people.length; i++){
        console.log(people[i])
        for(var m = 0; m < alphabet.length; m++){
            console.log(alphabet[m])
        }
    }
}

forception()

