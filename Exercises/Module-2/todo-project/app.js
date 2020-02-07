const todoForm = document.myForm;

const showTodos = () => {
  axios
    .get("https://api.vschool.io/taylor/todo")
    .then(response => response.data.forEach(todo => makeTodo(todo)))
    .catch(error => console.log(error));
};

window.addEventListener("load", showTodos);

document.getElementById("submitButton").addEventListener("click", e => {
  e.preventDefault();

  const todo = {
    title: todoForm.title.value,
    description: todoForm.description.value
  };

  todoForm.title.value = "";
  todoForm.description.value = "";

  axios
    .post("https://api.vschool.io/taylor/todo", todo)
    .then(response => makeTodo(response.data))
    .catch(error => console.log(error));
});

const makeTodo = todo => {
  const container = document.createElement("div");
  const title = document.createElement("p");
  const description = document.createElement("p");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  title.textContent = todo.title;
  title.className = "title";
  description.textContent = todo.description;
  description.className = "description";
  deleteButton.textContent = "x";
  deleteButton.className = "deleteButton";
  editButton.className = "editButton";
  editButton.textContent = "edit";
  container.setAttribute("id", todo._id);

  todoList.appendChild(container);
  container.appendChild(deleteButton);
  container.appendChild(editButton);
  container.appendChild(title);
  container.appendChild(description);

  deleteButton.addEventListener("click", e => {
    axios
      .delete(`https://api.vschool.io/taylor/todo/${todo._id}`, {})
      .then(() => todoList.removeChild(e.target.parentNode))
      .catch(error => console.log(error));
  });

  editButton.addEventListener("click", e => {
    title.style.display = "none";
    description.style.display = "none";
    const newTitle = document.createElement("input");
    newTitle.className = "newInputs";
    const newDescription = document.createElement("input");
    newDescription.className = "newInputs";
    const updatedList = document.getElementById("todoList");
    const updateButton = document.createElement("button");
    updateButton.textContent = "update";
    updateButton.className = "updateButton";

    container.appendChild(newTitle);
    container.appendChild(newDescription);
    container.appendChild(updateButton);

    const newTodo = updateButton.addEventListener("click", e => {
      axios
        .put(`https://api.vschool.io/taylor/todo/${todo._id}`, {
          title: newTitle.value,
          description: newDescription.value
        })
        .then(response => {
          newTitle.style.display = "none";
          newDescription.style.display = "none";
          updateButton.style.display = "none";
          const updatedDescription = document.createElement("p");
          const updatedTitle = document.createElement("p");
          updatedTitle.textContent = newTitle.value;
          updatedDescription.textContent = newDescription.value;
          updatedDescription.className = "description";
          container.appendChild(updatedTitle);
          container.appendChild(updatedDescription);
        })
        .catch(error => console.log(error));
    });
  });
};
