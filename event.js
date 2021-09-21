const title = document.querySelector('.title');

function handleClick(){
    title.style.color = "blue";
};

function handleMouseEnter(){
    title.innerText = "마우스 여있지";
}

function handleMouseLeave(){
    title.innerText = "마우스 나갔지";
}

function handleWindowResize(){
    document.body.style.background ="#eaeaea";
}

function hadleWindowCopy(){
    alert("no no")
    

}
title.addEventListener("click", handleClick);
title.addEventListener("mouseenter",  handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", hadleWindowCopy);