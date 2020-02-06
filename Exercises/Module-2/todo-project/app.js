const todoForm = document.myForm;

const todo = {
  title: todoForm.title.value,
  description: todoForm.description.value
};

document.getElementById("submitButton").addEventListener("click", function(e) {
  e.preventDefault();


  axios
    .post("https://api.vschool.io/taylir/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
});

function makeTodo(todo{
    const container = document.createElement("div")
    const title = document.createElement("h1")
    const deleteButton = document.createElement("button")

    title.textContent = todo.title
    title.className = "title"
    deleteButton.textContent = "X"

    todoList.appendChild(container)
    container.appendChild(title)
    container.appendChild(deleteButton)

    deleteButton.addEventListener("click", (e)=>
        console.dir(e.target)
        //axios call, use .removeChild method in the .then 
        //parent.removeChild()
})


