let Bars = document.querySelector(".nav-bars i");

let Xmark = document.querySelector(".x-mark i");

let NavBar = document.querySelector("header ul");


Bars.onclick = () =>{
    NavBar.style.width = "100%"
}

Xmark.onclick = () =>{
    NavBar.style.width = "0%"
}


document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallery-img")){
        const src = e.target.getAttribute("src");
        document.querySelector(".img-show-container img").src = src;
        document.querySelector(".img-show-container").style.scale = "1";
    }
})

document.querySelector(".btn-close").onclick = () =>{
    document.querySelector(".img-show-container").style.scale = "0"
}




// Show alert

