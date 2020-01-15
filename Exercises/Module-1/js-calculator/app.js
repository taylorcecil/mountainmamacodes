const readline = require("readline-sync");

// console.log(readline)

function addNum(num1, num2){
    return num1 + num2
}

function subtractNum(num1, num2){
    return num1 - num2
}

function multiplyNum(num1, num2){
    return num1 * num2
}

function divideNum(num1, num2){
    // if(num1 != 0 && num2 != 0){
        return num1 / num2
    // }
    // else{
    //     console.log("You cannot divide by zero")
    // }
}


function getInput(question){
    return readline.question(question)
}

function calculate(){
    const firstNum = +getInput("What is your first number? ")
    const secondNum = +getInput("What is your second number? ")
    const whichFunction = getInput("What would you like to do? add, subtract, multiply, divide: ")
    console.log(firstNum)
    console.log(secondNum)
    console.log(whichFunction)  

    if(whichFunction === "add"){
        console.log("The result is " + addNum(firstNum, secondNum)) 
    }
   else if(whichFunction === "subtract"){
        console.log("The result is " + subtractNum(firstNum, secondNum))
   }
   else if(whichFunction === "multiply"){
       console.log("The result is " + multiplyNum(firstNum, secondNum))
   }
   else if(whichFunction === "divide"){
       console.log("The result is " + multiplyNum(firstNum, secondNum))
   }
}

calculate()
