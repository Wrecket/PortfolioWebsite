const hinge = document.querySelector(".hinge");
const more = document.querySelector(".more");
const hidden = document.querySelector("#hidden")

window.addEventListener("scroll", function(){
    console.log("scroll");
    hinge.classList.add("animate__animated", "animate__bounce")
    setTimeout(function() {
        hinge.classList.remove("animate__animated", "animate__bounce")
    }, 10000)
});

more.addEventListener("click", function(){
    if(hidden.classList.contains("hidden")){
        hidden.classList.remove("hidden");
    }
    
    if(hidden.classList.contains("animate__bounceOutRight")){
        hidden.classList.remove("animate__bounceOutRight");
        hidden.classList.add("animate__bounceInLeft");
      } else if(hidden.classList.contains("animate__bounceInLeft")) {
        hidden.classList.remove("animate__bounceInLeft", );
        hidden.classList.add("animate__bounceOutRight");   
    }
})
