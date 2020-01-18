var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt?: ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift?: '));
let output
const cipher = function(str, amount){
    if (amount < 0){
        return cipher(str, amount + 26)
    }
    let output = ""
    for (let i = 0; i < str.length; i++){
        let newChar = str[i]
        if (newChar.match(/[a-z]/i)){
            let code = str.charCodeAt(i)
            newChar = String.fromCharCode(((code - 97 + amount) % 26) + 97)
        }
        output += newChar
    }
    return(output)
}
console.log(cipher(input, shift))


