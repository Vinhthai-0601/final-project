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
  })

  let rolex = document.querySelector("#rolex");
  let omega = document.querySelector("#omega");
  let hublot = document.querySelector("#hublot");
  let blancpain = document.querySelector("#blancpain");
  getWatches(rolex, 1, 5);
  getWatches(omega, 3, 5);
  getWatches(hublot, 5, 5);
  getWatches(blancpain, 7, 5);
  $("a").click(function(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('rolex')){
      getWatches(rolex,1,10);
    }
    if(e.target.classList.contains('omega')){
      getWatches(omega,2,10);
    }
    if(e.target.classList.contains('hublot')){
      getWatches(hublot,3,10);
    }
    if(e.target.classList.contains('blancpain')){
      getWatches(blancpain,4,10);
    }
  })
})

function getWatches(tar, min, max) {
  let param = `?page=${min}&limit=${max}`
  let url = "https://6050569d534609001766f7ef.mockapi.io/api/v1/watches" + param;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (this.status == 200) {
      let result = JSON.parse(this.responseText);
      getImage(result,tar);
    }
  };
  xhr.send();

}

function getImage(list, tar) {
  let output = "";
  list.forEach((item, i) => {
    let price = item.price.toLocaleString('en');
    output += `<a href="#">
      <div class="card col-md ">
        <img src="${item.image}" class="card-img ">
          <div class="card-body text-white">
            <h5>${item.name}</h5>
            <h4><i class="fas fa-dollar-sign"></i> ${price}</h4>
          </div>
      </div>
    </a>`
  });
  tar.innerHTML = output;
}
