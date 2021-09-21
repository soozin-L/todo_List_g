const formID = document.querySelector("#loginForm")
const formIpT = document.querySelector("#user-id");
const h1T = document.querySelector("#welcom");

const LS_NAME = "username"
const CL_HIDDEN = "hidden"



function onloginBtn(event){
    event.preventDefault(); 
    const formUserName = formIpT.value;
    localStorage.setItem(LS_NAME, formUserName);
    formID.classList.add(CL_HIDDEN);
    grettingFnc(formUserName)
}

function grettingFnc(username){
    welcom.classList.remove(CL_HIDDEN);
    h1T.innerText = `hello ${username}`
}


const getName = localStorage.getItem(LS_NAME);


if(getName===null){ 
    formID.classList.remove(CL_HIDDEN);
    formID.addEventListener("submit",  onloginBtn);
}else{
    grettingFnc(getName)
}



