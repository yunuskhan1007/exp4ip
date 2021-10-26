var username = document.getElementById("username");
var password = document.getElementById("password");
var email = document.getElementById("email");
var birthdate = document.getElementById("birthdate");
var city = document.getElementById("city");
var form= document.getElementById("form");

var c=document.getElementById("c");
var cpp=document.getElementById("cpp");
var java=document.getElementById("java");
var javascript=document.getElementById("javascript");
var python=document.getElementById("python");

form.addEventListener("submit", function (event) {
    if (!(validateUsername(username.value) && validatePassword(password.value))) {        
        event.preventDefault();
        if(!validateUsername(username.value)){
            alert("Username rules: Less than 20 characters")
        }
        if(!validatePassword(password.value)){
            alert("Password rules: Min length 8 characters. Contains one lowercase letter, one uppercase letter and one special character ")
        }
    }
    else{
        document.write("Username: "+username.value);
        document.write("<br>Password: "+password.value);
        document.write("<br>Email: "+email.value);
        document.write("<br>Birthdate: "+birthdate.value);
        document.write("<br>City: "+city.value);
        document.write("<br>Programming Languages Known:");
        if(c.checked==true){
            document.write("<br>"+c.value);
        }
        if(cpp.checked==true){
            document.write("<br>"+cpp.value);
        }
        if(java.checked==true){
            document.write("<br>"+java.value);
        }
        if(javascript.checked==true){
            document.write("<br>"+javascript.value);
        }
        if(python.checked==true){
            document.write("<br>"+python.value);
        }
    
    }
})

function validateUsername(username) {
    return username.length <= 20;
}

function validatePassword(password) {
    if(password.length >= 8 && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/.test(password)){
        return true;
    }
    else{
        return false;
    }
}