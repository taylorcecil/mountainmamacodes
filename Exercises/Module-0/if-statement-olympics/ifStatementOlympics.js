if(5 > 3){
    console.log('is greater than')
} 


var string = "cat"

if(string.length === 3){
    console.log('is the length')
} 


var x = 'cat'
var y = 'dog'

if(x === y){
    console.log('they are the same')
}
else {
    console.log('they are not the same')
}


var person = {
    name: 'Gaitlan',
    age: 25
}

if(person.age > 18){
    console.log(person.name + ' is allowed to see the movie')
}
else {
    console.log('You are NOT allowed to see the movie')
}

if(person.name[0] === 'B'){
    console.log('Allowed into movie')
}
else {
    console.log('Not allowed into movie')
}

if(person.name[0] === 'B' && person.age > 18){
    console.log('Congrats, you can see the movie')
}
else {
    console.log('Sorry, you cannot see the movie')
}


if(1 === 1){
    console.log()
}  




var scot = {
    name: 'taylor',
    age: 22
}

if(scot.name[2] === 'y'){
    console.log('Wow, you are a Scottish Woman')
}
else {
    console.log('GTJ')
}



if(1 === '1'){
    console.log('strict')



}
else if(1 == '1') {
    console.log('loose')
}
else {
    console.log('not equal at all')
}


if('s' > 12){
    console.log('what am I doing')
}
else {
    console.log('you got this')
}


var myVar = 'dog'

// ***********************************


if(typeof myVar === 'string'){
    console.log('thank you for calling')
    // typeof operator returns a string indicating the type of data it is 
}
else {
    console.log('keyboard')
}

var gater = 'true';
var tater;
var newt = "and assign a value at the same time";

console.log(typeof tater)
tater = "i can assign a value here"
console.log(typeof tater)
tater=5;
console.log(typeof tater)
console.log(typeof(typeof true))

if(typeof gater === 'string'){
    console.log('hello')
}
else {
    console.log('hi')
}


var taylor
console.log(typeof taylor)

if(typeof taylor === 'undefined'){
    console.log('bam')
}
else {
    console.log('boom')
}

var myVar;
if(11 > 12){
    myVar=  'up';
    console.log("PRINTOUT out something")
}
else {
    myVar = 'down';
}
console.log(myVar)

var myVar = (11>12) ? 'up' : 'down'
console.log(myVar)



var myNum = 12;
(myNum % 2 == 0) ? console.log('even') : console.log('odd')



//odd: 2x+1
//even: 2X

for(var i = 0; i <= 100; i++){
    console.log(i)
}

for(var i = 0; i < 10; i++){
    console.log("I'm getting good at for loops")
}


var favFoods = ['pasta', 'kale','avocado','tamales']

// console.log(favFoods[0])
// console.log(favFoods[1])
// console.log(favFoods[2])
// console.log(favFoods[3])

for(var i = 0; i < favFoods.length; i++){
    console.log(favFoods[i])
}


var goals = ['gardening in the spring', 'learning the necessary skills', 'becoming a web dev', 'health + wellness', 'chasing God']

for(var i = 0; i < goals.length; i++){
    console.log('Taylor is working on ' + goals[i])
}


var numbers = [1, 2, 3, 4, 5, 6]

for(var i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}


var count = 0

while(count < 10){
    console.log('hi')
    count++
}


for(var i = 0; i < 101; i++){
    if(i % 2 === 1){
        console.log('odd')
    }
    else {
        console.log('even')
    }
}


// dry = do not repeat yourself - goal is dynamic code

//function declaration
function sum(){
    console.log(2 + 2)
}

sum()


//parameters, ask G
function sum2(num1, num2){
    return num1 + num2
}

var result = sum2(10, 5) // arguments = data we feed into the parameters
console.log(result)

var result2 = sum2(20, 20) 
console.log(result2)

// *****************************************

function loopThroughArray(array){

    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

loopThroughArray([1, 2, 3, 4, 5, 6])
loopThroughArray(['hello', 'hi', 'hola', 'chao'])

// funtion addEm(num1, num2){
//     return num1 + num2
// }

function largest(num1, num2, num3){
    
    if(num1 > num2 && num1 > num3){
        return num1
    }
    if(num2 > num1 && num2 > num3){
        return num2
    }
    else {
        return num3
    }
}




function assessment (array){
    if()
}


largest(6, 7, 8)
console.log(largest(6, 7, 8))


function evenOdd(num1){
    if(num1 % 2 === 0){
        return 'even'
    }
    else {
        return 'odd'
    }
}

evenOdd(46)
console.log(evenOdd(46))


function what(string){
    if(string.length <= 20){
        return string + string
    }
    else {
        return string.length / 2
    }
}

what('gater')
console.log(what('gater'))


//**********************************************

//objects
//objects can hold other objects (data sets) inside of them



var person = {
    name: 'Dave',
    age: 56,
    friends: ['Amanda', 'Sam', 'Andy'],
    address: {
        street: '522 Chelsea',
        city: 'Lebanon'
    }
}

//dot notation
console.log(person.name)
console.log(person.address.city)

//bracket notation
console.log(person['name'])
console.log(person['address']['city'])


var dogs = [
    {
    name: 'Jade',
    age: 5,
    isLab: true,
    likes: ['fetch', 'cuddles', 'couch']
    },
    {
    name: 'Willow',
    age: 2,
    isLab: true,
    likes: ['jumping', 'running', 'eating']
    }
]

for(var i = 0; i < dogs.length; i++ ){
    if(dogs[i].age > 4){
        console.log('You are getting older')
    }
    else{
        console.log('You are still a young-n')
    }
}





dogs = ['willow', 'jade', 'milo']

function coding (array){
    // return dogs.length[2]
    return array[array.length -1]
}


coding(dogs)



