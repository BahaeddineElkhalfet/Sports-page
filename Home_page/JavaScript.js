
//check the password input Home page
function check (password){
  // get the input pasword value
  var password=$("#psw").val()
  console.log(password)
  //Concition
if (password.length>8){
  welcome()
  store()
}
else{alert("please youn need to check !")} //block the user to continue
}
//callback welcome
function welcome(){
  alert("Welcome!")
  window.location="../login_page/login.html"

  $("#login1").hide()
   
}
// to storage user 
function store(){

  localStorage.setItem("fname",$("#fname").val())
  localStorage.setItem("psw",$("#psw").val())
  
  }
// login check
function checklogin(){
  var user=localStorage.getItem("fname")
  var  pass=localStorage.getItem("psw")
  var userlogin=document.getElementById("user")
  var passlogin=document.getElementById("pass")
  if (userlogin.value===user&&passlogin.value===pass){
    alert("you are log in !")
   window.location="./step2.html"
  }
  else{
    alert("please youn need to check again !")
  }
}


