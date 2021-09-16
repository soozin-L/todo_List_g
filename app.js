const titleID = document.getElementById('appjs');
const titleCN = document.getElementsByClassName('title');
const mainCN = document.querySelector('.hello');
const subTag = document.querySelector('.hello h1');

console.log("titleID = "+titleID.id)
console.log("titleCN = "+titleCN.className)
console.log("mainCN = "+mainCN.className);


titleID.innerHTML = "아니 진짜"
console.dir(subTag)


/* 
function handleMouseEnter(){
    alert("ddd")
    subTag.style.color="green";
}

function handleMouseLeave(){
    console.log("sdfjdksf")
    subTag.style.color="blue";
}

function handleTitleClick(){
    console.log("title was clicked!");
    subTag.style.color="red";
}
*/
const fncEvent = {
    handleTitleClick:function(){
        alert("클릭했오");
    },
    handleMouseLeave:function(){
        alert("해당영역을 벗어났오");
    }
}


subTag.addEventListener("click", fncEvent.handleTitleClick);
/*
subTag.addEventListener("mouseenter", handleMouseEnter);
subTag.addEventListener("mouseleave", handleMouseLeave);
*/