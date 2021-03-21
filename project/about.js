document.addEventListener("DOMContentLoaded", ()=>{
  window.onscroll = function(){scrollEvent()};
})

function scrollEvent() {
  let height = window.pageYOffset;
  let el1 = document.querySelector("#row1");
  let el2 = document.querySelector("#row2");
  let el3 = document.querySelector("#row3");
  let el4 = document.querySelector("#row4");
  console.log(height);
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
}
function fadeIn(el) {
  setTimeout(function() {
    el.style.opacity = "1";
  }, 300);
}
