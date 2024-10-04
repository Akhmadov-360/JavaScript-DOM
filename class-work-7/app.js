const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoWrapper = document.getElementById("todo-wrapper");
const todoDateInput = document.getElementById("todo-date");

const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
storedTodos.forEach((todo) => addTodoItem(todo.text, todo.date));

addTodoButton.addEventListener("click", function () {
  const todoText = todoInput.value.trim();
  const todoDate = todoDateInput.value;
  if (todoText !== "" && todoDate !== "") {
    addTodoItem(todoText, todoDate);
    saveTodoLocalStorage(todoText,todoDate);

    todoInput.value = "";
    todoDate.value = "";
  }
});

function addTodoItem(todoText, todoDate) {
  const div = document.createElement("div");
  div.innerHTML = `
 <h3>${todoText}</h3>
 <p>${todoDate}</p>
 <button class='delete-todo'>X</button>
 `;

  todoWrapper.appendChild(div);
  div.querySelector(".delete-todo").addEventListener("click", function () {
    div.remove();
    removeTodoLocalStorage(todoText, todoDate);
  });
}

function saveTodoLocalStorage(todoText, todoDate) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push({ text: todoText, date: todoDate });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodoLocalStorage(todoText, todoDate) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todo) => todo.text !== todoText || todo.date !== todoDate);
  localStorage.setItem("todos", JSON.stringify(todos));
}
