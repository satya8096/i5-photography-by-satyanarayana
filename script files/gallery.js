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
