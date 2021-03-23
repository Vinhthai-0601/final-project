let uname = document.querySelector("#name");
let pass1 = document.querySelector("#password");
let error = document.querySelectorAll("p.error");
let form = document.querySelector("#form-signup");

let errors = {
  unameerr: false,
  passerr: false,
};

form.addEventListener("submit",function(e){
  e.preventDefault();
  console.log("Form Submitted");
  checkName();
  checkPass1();

  let formfail = false;
  // loop through errors obj to check if any errors = true
  Object.keys(errors).forEach(function(item) {
    console.log(item + ": " + errors[item]);
    if(errors[item]) {
      //if an error is found set formfail to true
      formfail = true;
    }
  })
  if(formfail) {
    alert("Log in failed, please correct errors");
  } else {
    alert("Log in successfully");
  }
});

//check Name
function checkName(){
  if(uname.value.length < 5 || uname.value.length > 30)
  {
    errors.unameerr = true;
    error[0].style = "display:initial";
  } else {
    errors.unameerr = false;
    error[0].style = "display:none";
  }
}

//check Password
function checkPass1() {
  console.log("password check 1");
  if(pass1.value.length < 10 || pass1.value.length > 20) {
    errors.passerr = true;
    error[1].style = "display:initial";
  } else {
    errors.passerr = false;
    error[1].style = "display:none";
  }
}


function showPwd(id, el) {
  let x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
    el.className = 'fa fa-eye showpwd';
  } else {
    x.type = "password";
    el.className = 'fa fa-eye-slash showpwd';
  }
}
