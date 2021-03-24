$(document).ready(function(){
    let navbar = $("nav");
    let loadbox = document.querySelector(".loadbox");
    let carousel = document.querySelector(".carousel-inner");
    let swiperslide = document.querySelector(".swiper-slide");

    fadeout(loadbox);
    fadein(carousel);
    fadein(swiperslide);

    $(window).scroll(function(){
      let height = $(window).scrollTop();
      if(height >= 100)
      {
        navbar.removeClass("navbar-dark bg-dark");
        navbar.addClass("navbar-light bg-light fixed-top");
        navbar.css("padding","10");
      }else {
        navbar.removeClass("navbar-light bg-light");
        navbar.addClass("navbar-dark bg-dark");
        navbar.css("padding","10");
      }
      console.log(height);
    })

    var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
      });

    function fadeout(el){
      setTimeout(()=>{
        el.style.display = "none";
        el.style.opacity = "0";
      },3000)
    }

    function fadein(el){
      setTimeout(()=>{
        el.style.display = "block";
        el.style.opacity = "1";
      },3000)
    }
})
