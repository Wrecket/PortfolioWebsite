const hinge = document.querySelector(".hinge");

window.addEventListener("scroll", function(){
    console.log("scroll");
    hinge.classList.add("animate__animated", "animate__bounce")
    setTimeout(function() {
        hinge.classList.remove("animate__animated", "animate__bounce")
    }, 5000)
});



