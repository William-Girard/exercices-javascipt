window.onload;

let menuNav = document.getElementsByTagName("li");
let nbElem = menuNav.length;
for(let i = 0; i<=nbElem -1  ; i++){
    menuNav[0 + i].addEventListener("mouseover", underline);
    function underline(){
        menuNav[0 + i].style.textDecoration = "underline";
    }   
}
for(let i = 0; i<=nbElem -1  ; i++){
    menuNav[0 + i].addEventListener("mouseout", noline);
    function noline(){
        menuNav[0 + i].style.textDecoration = "none";
    }
}

let elem = document.querySelector(".current-menu-item");
let colors = ["green", "purple", "blue"];
let x = 0;
elem.style.background = colors[2];
setInterval(function(){
    elem.style.background = colors[x];
    x++;
    if(x == colors.length){
        x = 0;
    } 
},3000);

