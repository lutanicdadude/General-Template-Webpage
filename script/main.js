 // main.js
function updateCopyrightYear() {
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
  }
  

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
// var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

window.addEventListener("scroll", function(){
  var navbar = document.querySelector("#navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
})



let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow() {
  let stt = 0;
  for(var i = active + 1; i < items.length; i++){
    stt++;
    items[i].style.transform = "translateX(${120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(-1deg)";
  }
}

loadShow();