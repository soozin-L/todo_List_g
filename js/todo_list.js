const todoForm = document.getElementById("todo-form"); 
const todoFormInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    todoList.appendChild(li);
    span.innerText=newTodo;
}; 

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoFormInput.value;
    console.log(newTodo)
    todoFormInput.value ="";
    paintTodo(newTodo);
};

todoForm.addEventListener("submit", handleTodoSubmit);



