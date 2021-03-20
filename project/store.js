$(document).ready(function(){
  let navbar = $("nav");
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
})
