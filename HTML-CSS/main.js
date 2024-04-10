document.addEventListener('DOMContentLoaded',function (){

    var inputb = document.getElementById("confirm_password");
    var inputa =document.getElementById("Password");
    var passNotMatch = document.querySelector('.passNotMatch')
   document.addEventListener('input',function (){
    let pass = inputa.value;
    let confPass = inputb.value;

    if(pass !== confPass) {
        inputa.style.border = "solid 1px red";
        inputb.style.border = "solid 1px red";
        passNotMatch.textContent='* password does not match'

    } else {
        inputa.style.border = "";
        inputb.style.border = ""
        passNotMatch.textContent=''

    }

   })
   
    
})

