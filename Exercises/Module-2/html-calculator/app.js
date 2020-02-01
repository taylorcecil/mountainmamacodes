document.getElementById("addButton").addEventListener("click", function(e) {
    e.preventDefault()
    const num1 = parseInt(document.getElementById("add1").value, 10)
    const num2 = parseInt(document.getElementById("add2").value, 10)
    
    const result = num1 + num2
    document.getElementById("addResult").value = result
})

document.getElementById("subtractButton").addEventListener("click", function(e) {
    e.preventDefault()
    const num1 = parseInt(document.getElementById("subtract1").value, 10)
    const num2 = parseInt(document.getElementById("subtract2").value, 10)
    
    const result = num1 - num2
    document.getElementById("subtractResult").value = result
})

document.getElementById("multiplyButton").addEventListener("click", function(e) {
    e.preventDefault()
    const num1 = parseInt(document.getElementById("multiply1").value, 10)
    const num2 = parseInt(document.getElementById("multiply2").value, 10)
    
    const result = num1 * num2
    document.getElementById("multiplyResult").value = result
})


