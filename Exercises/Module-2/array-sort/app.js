// Sort an array from smallest number to largest

const numbers = [1, 8, 10, 3, 8]

const smallLarge = (arr) => {
    return arr.sort((num1, num2) => {
        if(num1 < num2){
            return -1
        } 
        if(num1 > num2){
            return 1
        } 
        return 0
    })
}

console.log(smallLarge(numbers))

// Sort an array from largest number to smallest

const largeSmall = (arr) => {
    return arr.sort((num1, num2) => {
        if(num1 > num2){
            return -1
        }
        if(num1 < num2){
            return 1
        }
        return 0
    })
}

console.log(largeSmall(numbers))

// Sort an array from shortest string to longest

const names = ['jade', 'willow', 'taylorrrr', 'gaitlan']

const myFunc = (str1, str2) => {
    if(str1.length < str2.length){
        return -1
    }
    if(str1.length > str2.length){
        return 1
    }
    return 0
}


const shortestStringToLargestString = (arr) => {
    return arr.sort((str1, str2) => myFunc(str2, str1)) // this allows you to do it quickly shortest to longest and longest to shortest without writing all the if statements twice, just by switching the order of the parameters
}

console.log(shortestStringToLargestString(names))

// Sort an array alphabetically

const food = ['kale', 'feta cheese', 'milk', 'chicken', 'noodles']

const sortedFood = food.sort() // sorting with empty parameters automatically sorts them alphabetically

console.log(sortedFood)

// Sort the objects in the array by age


const friends = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

const ageMatters = (arr) => {
    return arr.sort((element1, element2) => {
        if(element1.age < element2.age){
            return -1
        } 
        if(element1.age > element2.age){
            return 1
        } 
        return 0
    })
}

console.log(ageMatters(friends))