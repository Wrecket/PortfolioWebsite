const hinge = document.querySelector(".hinge");
const more = document.querySelector(".more");
const hidden = document.querySelector("#hidden");
const name = document.querySelector(".hover-ef");
const name2 = document.querySelector(".hover-ef2");
const name3 = document.querySelector(".hover-ef3");
const name4 = document.querySelector(".hover-ef4");
const name5 = document.querySelector(".hover-ef5");
const container = document.querySelector(".main-container");
const body = document.querySelector("body");

    setTimeout(() => {
        name.classList.add("name-on");
    setTimeout(() => {
        name.classList.add("move")
    }, 3000)
    name2.classList.add("name-on")
    setTimeout(function() {
        name2.classList.add("move2")
    }, 3000)

    name3.classList.add("name-on")
    setTimeout(function() {
        name3.classList.add("move3")
    }, 3000)

    name4.classList.add("name-on")
    setTimeout(function() {
        name4.classList.add("move4")
    }, 3000)

    name5.classList.add("name-on")
    setTimeout(function() {
        name5.classList.add("move5")
    }, 3000)
    }, 1000)

// container.addEventListener("mouseout", function() {
//     name.classList.remove("name-on")
//     name.classList.add("name-off")
//     setTimeout(() => {
//         name.classList.remove("move")
//     }, 3000)
//     name2.classList.remove("name-on")
//     name2.classList.add("name-off")
//     setTimeout(function() {
//         name2.classList.remove("move")
//     }, 3000)
    
    
// })

// window.addEventListener("scroll", function(){
//     console.log("scroll");
//     hinge.classList.add("animate__animated", "animate__bounce")
//     setTimeout(function() {
//         hinge.classList.remove("animate__animated", "animate__bounce")
//     }, 10000)
// });

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
