// Make a function that will return any given string into all caps followed by the same string all lowercase

function capAndLow(str){
    var upper = str.toUpperCase();
    var lower = str.toLowerCase();
    return upper + lower
}

console.log(capAndLow("hello"))


// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor()

// ????

// Make a function that uses slice() and the other functions you've written to return the first half of the string

function returnFirstHalf(str){
    return str.slice(0, str.length / 2)
}

console.log(returnFirstHalf("hello world"))

        
// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

function firstCapSecondLow(str){
    const first = str.slice(0, str.length / 2).toUpperCase()
    const second = str.slice(str.length / 2, str.length).toLowerCase()
    return first + second
}

console.log(firstCapSecondLow("hello world"))

// Optional Code Challenge (This one is a step up in difficulty and utilizes the .split() string method and .join() array method): Make a function that takes any string and capitalizes any character that follows a space.

// ??
