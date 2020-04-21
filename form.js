var email = document.getElementById("email");
var pwd = document.getElementById("pwd");
var mob = document.getElementById("mob");

    function validate(){
    //if(email.value==""||pwd.value==""){
    //    alert("Email cannot be empty");
    //    return false;
//}
   // else{
    //    return true;
            // alert("Validation is proper");
    //}
    if(email.value==""){
        alert("Email cannot be empty");
        return false;
    }
    if (pwd.value==""){
        alert("Password cannot be empty");
        return false;
    }
    if(pwd.value.length<=7){
        alert("Password is too short");
        psw.style.border="2px solid red";
    }
    if(mob.value.length < 10){
        alert("Mobile no should contain 10nos");
        mob.style.border="2px solid red";
    
    else{
        return true;
    }
    {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(inputtxt.value.match(phoneno))
              {
            return true;
              }
            else
              {
              alert("message");
              return false;
              }
      }
      }
    {
        var error = document.getElementById("error");
        let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).(.[a-z]{2,3})?$/
        if(regexp.test(email.valid)){
            error.innerHTML = "Valid";
            return true;
        }
        else{
            error.innerHTML = "invalid";
            error.style.color = "red";
            return false;
        
         
        }
    }
}
   
    
    
    
