const todoForm = document.getElementById("todo-form"); 
const todoFormInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
let todoAr = [];

const TODOAR_KEY = "todoAr";

function saveTodo(){
    localStorage.setItem(TODOAR_KEY, JSON.stringify(todoAr));
}

function deleteTodo(event){    
    const li = event.target.parentElement;
    li.remove();
    console.log(typeof li.id);
    todoAr = todoAr.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    li.id=newTodo.id
    span.innerText=newTodo.text;

    btn.innerText = "❌"
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}; 

function handleTodoSubmit(event){
    event.preventDefault(); 
    const newTodo = todoFormInput.value;
    todoFormInput.value ="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    todoAr.push(newTodoObj);
    paintTodo(newTodoObj);
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
