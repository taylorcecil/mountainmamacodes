// Write a function that takes an array of numbers and returns the largest (without using Math.max()) 

function returnLargest(arr) {
    let largestNumber = arr[0]
    for(var i = 0; i < arr.length; i++){
        if(largestNumber < arr[i]){
            largestNumber = arr[i]
        
        }
    }
    return largestNumber
}


const taylor = [5, 24, 78, 128, 20]
console.log(returnLargest(taylor))


//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2) {
    if(num1 % num2 === 0){
        return true
    }
    else {
        return false
    }
}

console.log(isDivisible(2, 4))
console.log(isDivisible(6, 8))
console.log(isDivisible(24, 12))


//Write a function that takes an array of words and a character and return each word that has that letter present.

function lettersWithStrings(arr, symbol){
    const finalArray = []
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
        for(var j = 0; j < arr[i].length; j++){
            console.log(arr[i][j])
            if(arr[i][j] === symbol){
                finalArray.push(arr[i])
            }
        }
    }
    return finalArray
}

var hello = ['hi', 'bye!', 'hola!']
console.log(lettersWithStrings(hello, '!'))

