document.addEventListener("DOMContentLoaded", ()=>{
  window.onscroll = function(){scrollEvent()};

})

function scrollEvent() {
  let height = window.pageYOffset;
  let el1 = document.querySelector("#row1");
  let el2 = document.querySelector("#row2");
  let el3 = document.querySelector("#row3");
  let el4 = document.querySelector("#row4");
  let el5 = document.querySelector("nav");
  if(height >= 200){
    fadeIn(el1);
  }
  if (height >= 800) {
    fadeIn(el2);
  }
  if (height >= 1200) {
    fadeIn(el3);
  }
  if (height >= 1500) {
    fadeIn(el4);
  }
  if (height >= 100){
    changeClass(el5);
  }
  if (height == 0) {
    updateClass(el5);
  }
}

function fadeIn(el) {
  setTimeout(function() {
    el.style.opacity = "1";
  }, 300);
}

function changeClass(el) {
  el.classList.remove("navbar-dark","bg-dark");
  el.classList.add("navbar-light","bg-light", "fixed-top");
  el.style.padding = "10";
}
function updateClass(el) {
  el.classList.remove("navbar-light","bg-light");
  el.classList.add("navbar-dark","bg-dark");
  el.style.padding = "10";
}
