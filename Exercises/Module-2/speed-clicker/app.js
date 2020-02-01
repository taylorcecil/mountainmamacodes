// const gaitlan = true;
// const taylor = false;



// const number = 5
// const number2 = number * 10

const odd = [1,3,5,7,9]

// for(var i=0; i < odd.length; i++){
//     const result = odd[i] * 2
//     console.log(`${odd[i]} times 2 is ${result}`)
// }

// function multiplyByTwo(number){
//     const result = number * 2
//     console.log(`${number} times 2 is ${result}`)
// }

// odd.forEach(multiplyByTwo)

// const gaitlan = (taylor) => {
//     const result = taylor * 2
//     console.log(`${taylor} times 2 is ${result}`)
// }

// odd.forEach(gaitlan)

// odd.forEach((number) => {
//     const result = number * 2
//     console.log(`${number} times 2 is ${result}`)
// })

// console.log(odd)

let num = 0;
odd.forEach((number) => {
    num += number
})
console.log(num)
