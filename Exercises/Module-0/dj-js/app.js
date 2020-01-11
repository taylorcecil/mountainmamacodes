const DJ = document.getElementById("classy")

function turnColor(color) {
    DJ.style.backgroundColor = color
}

var pink = "#f331f7"
var blue = "#0522f3"
var red = "#bb1000"
var yellow = "#e6cf28"
var green = "#3c7527"
var orange = "#f36c08"

DJ.addEventListener("mouseover", mouseOver)
function mouseOver() {
    turnColor(blue)
}


DJ.addEventListener("mouseout", mouseOut)
function mouseOut() {
    turnColor(pink)
}


DJ.addEventListener("mousedown", onClick)
function onClick() {
    turnColor(red)
}

DJ.addEventListener("mouseup", offClick)
function offClick() {
    turnColor(yellow)
}

DJ.addEventListener("dblclick", dblClick)
function dblClick() {
    turnColor(green)
}


document.addEventListener("wheel", scroll)
function scroll() {
    turnColor(orange)
}



document.addEventListener("keydown", keyColor)
function keyColor(event) {
    console.log(event)
    var keyNum = event.which;
    if(keyNum === 82){
        turnColor(red)
    }
    else if(keyNum === 71){
        turnColor(green)
    }
    else if(keyNum === 66){
        turnColor(blue)
    }
    else if(keyNum === 89){
        turnColor(yellow)
    }
    else if(keyNum === 79){
        turnColor(orange)
    }
}

document.addEventListener("keyup", turnColor(pink))