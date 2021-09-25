const todoForm = document.getElementById("todo-form"); 
const todoFormInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteTodo(event){    
    const li = event.target.parentElement;
    li.remove;
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText=newTodo;

    btn.innerText = "❌"
    btn.addEventListener("click", deleteTodo);
    
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}; 

function handleTodoSubmit(event){
    event.preventDefault(); 
    const newTodo = todoFormInput.value;
    console.log(newTodo)
    todoFormInput.value ="";
    paintTodo(newTodo);
};

todoForm.addEventListener("submit", handleTodoSubmit);



