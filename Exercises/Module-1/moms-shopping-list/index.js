const newItem = document.getElementById("input-item")
const shoppingList = document.getElementById("list")
const submit = document.getElementById("submit-button")
const deleteX = document.getElementsByClassName("delete-button")


function submitItem(e) {
    e.preventDefault()
    const text = newItem.value
    const li = document.createElement("li")
    li.innerHTML = text
    shoppingList.appendChild(li)
    const editButton = document.createElement("button")
    editButton.innerHTML = "edit"
    li.appendChild(editButton)
    const deleteButton = document.createElement("button")
    deleteButton.classList.add('delete-button')
    deleteButton.innerHTML = "X"
    deleteButton.addEventListener("click", deleteItem)
    li.appendChild(deleteButton)
}

submit.addEventListener("click", submitItem)

function deleteItem(e) {
    const listItem = document.getElementsByTagName("li")
    shoppingList.removeChild(e.target.parentNode)
}


