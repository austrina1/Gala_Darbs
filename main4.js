
function matchingPasswords() {
    var password = $("#password").val();
    var passwordRepeat = $("#passwordRepeat").val();

    if(password != passwordRepeat)
        $("#divCheckPasswordMatch").html("Passwords do not match!");
    else
        $("#divCheckPasswordMatch").html("Passwords match.");

}   
 $(document).ready(function () {
    $("#password, #passwordRepeat").keyup(matchingPasswords);
 });




//  function passwordIsRight () {
//      var password = document.getElementById("password");
//      var passwordLenght = password.value.lenght;

//      if (password.value==''|| passwordLenght<=8) {
//          alert('Please enter correct password');
//      }
//  }

//  $(document).ready(function() {

//     $("#password").keyup(passwordIsRight);
 
//  });
