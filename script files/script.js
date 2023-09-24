let Bars = document.querySelector(".nav-bars i");

let Xmark = document.querySelector(".x-mark i");

let NavBar = document.querySelector("header ul");


Bars.onclick = () =>{
    NavBar.style.width = "100%"
}

Xmark.onclick = () =>{
    NavBar.style.width = "0%"
}