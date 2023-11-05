function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var uname = document.Form.uname.value;
    var email = document.Form.email.value;
    var password = document.Form.password.value;
    var mobile = document.Form.mobile.value;
    var pancard = document.Form.pancard.value;
    
    var nameErr = unameErr = emailErr = passwordErr = mobileErr = pancardErr =   true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(name == "") {
        printError("unameErr", "Please enter your username");
        var elem = document.getElementById("uname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z0-9]+$/;                
        if(regex.test(name) === false) {
            printError("unameErr", "Please enter a valid username");
            var elem = document.getElementById("uname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("unameErr", "");
            unameErr = false;
            var elem = document.getElementById("uname");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
    if(password == "") {
        printError("passwordErr", "Please enter a valid Password");
        var elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(regex.test(mobile) === false) {
            printError("passwordErr", "Please enter a valid Password");
            var elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("passwordErr", "");
            passwordErr = false;
            var elem = document.getElementById("password");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    
    if(pancard == "") {
        printError("pancardErr", "Please enter your Pancard number");
        var elem = document.getElementById("pancard");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /[A-Z]{5}\d{4}[A-Z]{1}/;
        if(regex.test(pancard) === false) {
            printError("pancardErr", "Please enter a valid 11 digit pancard number");
            var elem = document.getElementById("pancard");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("pancardErr", "");
            pancardErr = false;
            var elem = document.getElementById("pancard");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    
    if((nameErr || unameErr || emailErr || passwordErr || mobileErr || pancardErr ) == true) {
       return false;
    } 
};