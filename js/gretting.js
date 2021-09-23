const loginForm = document.querySelector('#loginForm');
const loginFormInput = document.querySelector('#loginForm input');
const greetingUserName = document.querySelector('#greeting')

const Hidden_ClassName = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();    
    const username = loginFormInput.value;
    loginForm.classList.add(Hidden_ClassName);
    localStorage.setItem(USERNAME_KEY, username);
    showGreetion(username);
}

function showGreetion(username){
    greetingUserName.classList.remove(Hidden_ClassName);
    greetingUserName.innerText=`hello ${username} 👋`;
}


const LS_USERNAME = localStorage.getItem(USERNAME_KEY);

if(LS_USERNAME === null){
    loginForm.classList.remove(Hidden_ClassName);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    showGreetion(LS_USERNAME);
}






