var dt = new Date();
document.getElementById('date').innerHTML=dt;
//
$(document).ready(function(){
    $(".welcome").hide()
    $(".hide-sign").click(function(){
    $("#center").slideUp()   
    $(".welcome").show(2000)     
    })
    $("hide-sign").addClass("pointer")
})
/*
var nameArray=[]
var fname=$("#fname").val()
var lname=$("#lname").val()
var email=$("#email").val()
// add user
$("#submit").click(function users(fname,lname,email){
    return nameArray.push({
        firstname:fname,
        lastname:lname,
        email:email,
    })
})

// check name 

function name(input){
for(var i=0;i<nameArray.length;i++){
    if(namearray[i]===input)
}

}*/
