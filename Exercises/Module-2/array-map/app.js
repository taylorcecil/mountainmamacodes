// Make an array of numbers that are doubles of the first array

const nums = [2, 4, 6, 8]

const doubled = (arr) => {
    return arr.map((element) => element * 2)
}

console.log(doubled(nums))

// Take an array of numbers and make them strings

const turnToStrings = (arr) => {
    return arr.map((element) => element.toString(10)) // num.toString(base)
}

console.log(turnToStrings(nums))

// Capitalize each of an array of names

const people = ['gaitlan', 'taYLOR', 'JADE', 'willoW']

const toLower = (arr) => {
    return arr.map((element) => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
}

console.log(toLower(people))

//  Make an array of strings of the names

const thePeople = [{
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

const thisFunction = (arr) => {
    return arr.map((element) => element.name)
}

console.log(thisFunction(thePeople))

// Make an array of strings of the names saying whether or not they can go to The Matrix

const decision = (arr) => {
    return arr.map((element) => {
        if(element.age >= 18){
            return `${element.name} can go to The Matrix`
        } else {
            return `${element.name} is under age!`
        }
    })
}

console.log(decision(thePeople))

// Make an array of the names in h1s, and the ages in h2s

const nameInTag = thePeople.map((element) => `<h1>${element.name}</h1><h2>${element.age}</h2>`)

console.log(nameInTag)
