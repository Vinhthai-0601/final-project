$(document).ready(function(){
    let navbar = $("nav");
    let loadbox = document.querySelector(".loadbox");
    let carousel = document.querySelector(".carousel-inner");
    let swiperslide = document.querySelector(".swiper-wrapper");
    let progress = document.querySelector("progress");
    fadeout(loadbox);
    fadein(carousel);
    fadein(swiperslide);
    fadein(progress);

    $(window).scroll(function(){
      let height = $(window).scrollTop();
      if(height >= 0)
      {
        progress.value = 0;
        navbar.removeClass("navbar-dark bg-dark");
        navbar.addClass("navbar-light bg-light fixed-top");
        navbar.css("padding","10");
      }
      if(height >= 100)
      {
        progress.value = 100;
      }
      if(height >= 200)
      {
        progress.value = 200;
      }
      if(height >= 300)
      {
        progress.value = 300;
      }
      if(height >= 400)
      {
        progress.value = 400;
      }
      if(height >= 500)
      {
        progress.value = 500;
      }
      if(height >= 600)
      {
        progress.value = 600;
      }
      if(height >= 700)
      {
        progress.value = 700;
      }
      if(height >= 800)
      {
        progress.value = 800;
      }
      if(height >= 900)
      {
        progress.value = 900;
      }
      if(height >= 1000)
      {
        progress.value = 1000;
      }
      if(height >= 1100)
      {
        progress.value = 1100;
      }
      if(height >= 1200)
      {
        progress.value = 1200;
      }
      if(height >= 1300)
        {
          progress.value = 1300;
        }
        if(height >= 1400)
        {
          progress.value = 1400;
        }
        if(height >= 1500)
        {
          progress.value = 1500;
        }
        if(height >= 1600)
        {
          progress.value = 1600;
        }
        if(height >= 1700)
        {
          progress.value = 1700;
        }
        if(height >= 1800)
        {
          progress.value = 1800;
        }
        if(height >= 1900)
        {
          progress.value = 1900;
        }
        if(height >= 2000)
        {
          progress.value = 2000;
        }
        if(height >= 2100)
        {
          progress.value = 2100;
        }
        if(height >= 2200)
        {
          progress.value = 2200;
        }
        if(height >= 2300)
        {
          progress.value = 2300;
        }
        if(height >= 2400)
        {
          progress.value = 2400;
        }
        if(height >= 2500)
        {
          progress.value = 2500;
        }
      else if (height == 0) {
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
        el.style.display = "flex";
        el.style.opacity = "1";
      },3000)
    }
})
