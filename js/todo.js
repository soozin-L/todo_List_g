const todoForm = document.getElementById("todo-form"); 
const todoFormInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let todoAr = [];

const TODOAR_KEY = "todoAr";

function saveTodo(){
    localStorage.setItem(TODOAR_KEY, JSON.stringify(todoAr));
    console.log(`localStorage.setItem = ${localStorage.setItem(TODOAR_KEY, JSON.stringify(todoAr))}`)
}

function deleteTodo(event){    
    const li = event.target.parentElement;
    li.remove();
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
    todoAr.push(newTodo);
    paintTodo(newTodo);
    saveTodo();
};

todoForm.addEventListener("submit", handleTodoSubmit);
const savedTodoAr = localStorage.getItem(TODOAR_KEY);
console.log(`localStorage.getItem = ${savedTodoAr}`)

    
if(savedTodoAr !== null){
    const parsedTodoAr = JSON.parse(savedTodoAr);
    todoAr = parsedTodoAr;
    parsedTodoAr.forEach(paintTodo);
}

/*
 function sayHello(item){
     console.log("this is the turn of ", item);
    }
    === (item) => console.log("this is the turn of ", item)
*/
