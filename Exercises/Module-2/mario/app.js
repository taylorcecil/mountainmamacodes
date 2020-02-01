const goombaInput = document.getElementById("goombaInput")
const bobOmpInput = document.getElementById("bobOmpInput")
const cheepCheepInput = document.getElementById("cheepCheepInput")
const button = document.getElementById("button")
const priceContainer = document.getElementById("totalPriceContainer")

button.addEventListener("click", (e) => {
    e.preventDefault()
    const price = (goombaInput.value * 5) + (bobOmpInput.value * 7) + (cheepCheepInput.value * 11)
    priceContainer.innerText = price
})

