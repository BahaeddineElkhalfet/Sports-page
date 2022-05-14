function check(){
  //check the password input Home page
  // get the input pasword value
  var password=$("#psw").val()

if (password.length>8){
  welcome()
  store()
}
else{alert("please you need to check !")} //block the user to continue
};
//callback welcome
function welcome(){
  alert("Welcome!")
   window.open(
              "../login_page/login.html", "_blank")

  $("#login1").hide()
   
};

// to storage user 
 var u= document.getElementById('fname')
 var p= document.getElementById("psw")
function store(){
  
    localStorage.setItem("fname", 'u'.value)
    localStorage.setItem("psw", 'p'.value)
    
    }
// login check
function checklogin(){
  const user=localStorage.getItem("fname")
  const  pass=localStorage.getItem("psw")
  var userlogin=document.getElementById("user")
  var passlogin=document.getElementById("pass")
  if (userlogin.val()===user&&passlogin.val()===pass){
    alert("you are log in !")
   window.location="./step2.html"
  }
  else{
    alert("please youn need to check again !")
  }
}

