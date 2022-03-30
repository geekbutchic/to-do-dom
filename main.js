// TODOS AVAILABLE GLOBALLY.

// SETS ID FOR 3 AFTER EXAMPLE TODOS ARE DISPLAYED
let id = 3;

//==========QUERY SELECTORS=============
const addButton = document.querySelector("button.add-todo");

const clearButton = document.querySelector("button.clear-todos");

//FUNCTION IS GIVEN TODO OBJECT AND APPENDS TO TODO LIST
//============FUNCTIONS================
const addTodo = (todoObject) => {
  todos.push(todoObject);
};

//REMOVES TODO
const removeTodo = (index) => {
  todos.splice(index, 1);
};

//DISPLAYS NEW TODO ON DOM
const printTodo = (todo) => {
  //CREATES LI TO APPEND
  const li = document.createElement("li");
  //SET LI 
  li.innerText = todo.text;
  li.classList.add("todo-item");
  //GIBES ID TO PUSH TO OBJECT
  li.id = todo.id;
  //FOR FUTURE USE - WILL ADD IS COMPLETE
  if (todo.complete === true) {
    li.classList.add("complete");
  }
  //ACQUIRE TO APPEND OL TO APPEND LI
  const ol = document.querySelector("ol.todo-list");
  ol.appendChild(li);
};

//PRINTS TODO IN OBJECT
const printAllTodos = () => {
  for (const todo of todos) {
    printTodo(todo);
  }
};

//FIRST FUNCTION CALL OF PRINT TODOS
printAllTodos();

//CLEAR TODOS
const clearAllTodos = () => {
  const ol = document.querySelector("ol.todo-list");
  ol.innerHTML = "";
};

//REFRESH TODO 
const refresh = () => {
  clearAllTodos();
  printAllTodos();
};

//EVENT LISTENERS
//ADD BUTTON

