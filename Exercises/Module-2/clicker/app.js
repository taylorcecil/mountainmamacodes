// Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.

// need: html div for amount of clicks to go in 
// button to refresh the count ?? 
// event listener for click on the window 
// capture amount of clicks into a variable to append to the div that holds count
// some local data thing? store + access local storage
// check for click count in local storage after refresh, if there is count then append to div, if not then set innerHTML to 0

const STORAGEKEY = 'count'

let amountOfClicks 
if( localStorage.getItem(STORAGEKEY)) {
    amountOfClicks =  +localStorage.getItem(STORAGEKEY)
} else{
    amountOfClicks = 0
}

const countBox = document.getElementById("countBox")

countBox.innerHTML = amountOfClicks

const myFunction = () => {
    amountOfClicks += 1 // same as amountOfClicks = amountOfClicks + 1
    countBox.innerHTML = amountOfClicks
    localStorage.setItem(STORAGEKEY, amountOfClicks) // allows it to persist page refresh 
}

window.addEventListener("click", myFunction)

const button = document.getElementById("zeroButton")

const clearButton = (e) => {
    e.stopPropagation() // stop chain of events - in this case the window event listener 
    amountOfClicks = 0
    countBox.innerHTML = 0
    localStorage.removeItem(STORAGEKEY)
}

button.addEventListener("click", clearButton)

// alert("You have 10 seconds to click as much as you can!")

// window.setTimeout(()=> alert(`You have clicked ${amountOfClicks} times, cool!`), 10000)

// same thing: "essentially"
// var count = localStorage.getItem('count') ? localStorage.getItem('count') : 0

