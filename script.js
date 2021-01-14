function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var comments = document.getElementById("comments").value;
    var socials = document.getElementById("socials").value;
    var comments = document.getElementById("subscribe").value;


    if (isNaN(phone) || phone.length != 11){
        text = "Please enter a valid phone number";
        alert(text);
        return false;
    }

    if (!isEmail(email)){
        text = "Email is not Valid";
        alert(text);
        return false;
    }
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

$(document).ready(function(){
    $("#submit").click(function(event){
      event.preventDefault();
      window.location = "submit.html";
    });
});