// TODOS AVAILABLE GLOBALLY.

// SETS ID FOR 3 AFTER EXAMPLE TODOS ARE DISPLAYED
let id = 3;

//==========QUERY SELECTORS=============
const addButton = document.querySelector("button.add-todo");

const clearButton = document.querySelector("button.clear-todos");

//FUNCTION IS GIVEN TODO OBJECT AND APPENDS TO TODO LIST
//============FUNCTIONS=================
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
  //SETS LI 
  li.innerText = todo.text;
  li.classList.add("todo-item");
  //GIvES ID TO PUSH TODO OBJECT
  li.id = todo.id;
  //FOR FUTURE USE - WILL ADD IS COMPLETE
  if (todo.complete === true) {
    li.classList.add("complete");
  }
  //ACQUIRE TO APPEND LI TO APPEND OL
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
addButton.addEventListener("click", (event) => {
  const input = document.querySelector("input.todo-input");
  const todoObject = {
    text: input.value,
    complete: false,
    priority: 2,
    id: id,
  };
  id++;
  addTodo(todoObject);
  refresh();
});

//CLEAR BUTTON
clearButton.addEventListener("click", (event) => {
  // OR todos.length = 0;
  todos.splice(0);
  refresh();
});
