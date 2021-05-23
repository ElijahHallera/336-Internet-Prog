var usernameAvailable = false;
var zipFound = false;
    
//Displaying City from API after typing a zip code    
$("#zip").on("change", function(){
        //alert(  $("#zip").val()  );
        $.ajax({
          method: "GET",
             url: "https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php?",
        dataType: "json",
            data: { "zip": $("#zip").val(), "latitude": $("#latitude").val(),  "longitude": $("#longitude").val() },
         success: function(result,status) {
              //alert(result.city);
                if(result == true){
                    zipFound == true;
                } else if (result == false) {
                    $("#zipError").html("Zip Code not found!");
                    $("#zipError").css("color", "red");
                }
                  $("#city").html(result.city);
                  $("#latitude").html(result.latitude);
                  $("#longitude").html(result.longitude);  
              }
        });//ajax
    });//zip
    
    $("#state").on("change", function() {
        //alert($("#state").val());
        $.ajax({
            method: "GET",
               url: "https://itcdland.csumb.edu/~milara/ajax/countyList.php?state=ca",
          dataType: "json",
              data: { "state": $("#state").val() },
           success: function(result,status) {
                
              //alert(result[0].county);
              $("#county").html("<option> Select One </option>");
              for (let i=0; i < result.length; i++){
                  $("#county").append("<option>" + result[i].county + "</option>");
              }                  
            }
        });//ajax
    }); //state
    
    $("#username").change(function() {
        //alert($("#username").val());
        $.ajax({
            method: "GET",
               url: "https://cst336.herokuapp.com/projects/api/usernamesAPI.php?username=eeny",
          dataType: "json",
              data: { "username":$("#username").val() },
           success: function(result,status) {
                if(result.available){
                            $("#usernameError").html("Username is available!");
                            $("#usernameError").css("color", "green");
                            usernameAvailable = true;
                        }
                        else {
                            $("#usernameError").html("Username is unavailable!");
                            $("#usernameError").css("color", "red");
                            usernameAvailable = false;
                        }               
                    }
        });//ajax
    }); //username
    
   $("#signupForm").submit(function(event){
       //alert("submitting form...");
       if (!isFormValid()) {
         event.preventDefault();
       }
   });//signupForm
   
   function isFormValid(){
      var isValid = true;
      if (!usernameAvailable) {
          isValid = false;
      }
      if ($("#username").val().length == 0) {
          isValid = false;
          $("#usernameError").html("Username is required");
      }
      if ($("#password").val().length < 6){
        $("#passwordLengthError").html("Password Must be at least 6 characters long!");
        $("#passwordLengthError").css("color", "red");
        isValid = false;
      }
     if ($("#password").val() != $("#passwordAgain").val()){
        $("#passwordAgainError").html("Password Mismatch! Make sure they match!");
         $("#passwordAgainError").css("color", "red");
        isValid = false;
      }
      return isValid;
   }