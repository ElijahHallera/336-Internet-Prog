$(document).ready(function(){
    
   //Global Variables
   var score = 0;
   var attempts = localStorage.getItem("total_attempts");
    
   //Event Listeners
   //"Submit Quiz" Button
   $("button").on("click", gradeQuiz);
   
   //Question 5 images
   $(".q5Choice").on("click", function(){
       $(".q5Choice").css("background", "");
       $(this).css("background", "rgb(137, 207, 240)");
   })
   
   displayQ4Choices();
   displayQ6Choices();
   
   function displayQ4Choices(){
       let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Deleware"];
       q4ChoicesArray = _.shuffle(q4ChoicesArray);
       
       for(let i = 0; i < q4ChoicesArray.length; i++){
           $("#q4Choices").append(` <input type = "radio" name = "q4" id = "${q4ChoicesArray[i]}"
               value = "${q4ChoicesArray[i]}"> <label for = "${q4ChoicesArray[i]}"> ${
               q4ChoicesArray[i]}</label>`);
            }
    }
    
    function displayQ6Choices(){
       let q6ChoicesArray = ["California quail", "Gambel's quail", "Mountain quail", "Northern bobwhite"];
       
       for(let i = 0; i < q6ChoicesArray.length; i++){
           $("#q6Choices").append(` <input type = "radio" name = "q6" id = "${q6ChoicesArray[i]}"
               value = "${q6ChoicesArray[i]}"> <label for = "${q6ChoicesArray[i]}"> ${
               q6ChoicesArray[i]}</label>`);
            }
    }
       
    function isFormValid(){
        let isValid = true;
        if($("#q1").val() == ""){
            isValid = false;
            $("#validationFdbk").html("Question 1 was not answered");
        }
        return isValid;
    }
    
    function rightAnswer(index){
        $(`#q${index}Feedback`).html("Correct!");
        $(`#q${index}Feedback`).attr("class", "bg-success text-white");
        $(`#markImg${index}`).html("<img src = 'img/checkmark.png'>");
        score += 12.5;
    }
    
    function wrongAnswer(index){
        $(`#q${index}Feedback`).html("Incorrect!");
        $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
        $(`#markImg${index}`).html("<img src = 'img/xmark.png'>");
    }
    
    function gradeQuiz(){
        $("#validationFdbk").html("");
        
        if(!isFormValid()){
            return;
        }
        //variables
        score = 0;
        let q1Response = $("#q1").val().toLowerCase();
        let q2Response = $("#q2").val();
        let q4Response = $("input[name=q4]:checked").val();
        let q6Response = $("input[name=q6]:checked").val();
        let q7Response = $("#q7").val();
        let q8Response = $("#q8").val();
        
        //Question 1
        if(q1Response == "sacramento"){
            rightAnswer(1);
        } else {
            wrongAnswer(1);
        }
        
        // if(q1Response == "sacramento"){
        //     $("#q1Feedback").html("Correct!");
        //     $("#q1Feedback").attr("class", "bg-success text-white");
        //     $("#markImg1").html("<img src = 'img/checkmark.png' alt = 'checkmark'>");
        //     score += 20;
        // } else {
        //     $("#q1Feedback").html("Incorrect!");
        //     $("#q1Feedback").attr("class", "bg-warning text-white");
        //     $("#markImg1").html("<img src = 'img/xmark.png' alt = 'xmark'>");
        // }
        
        //Question 2
        if(q2Response == "mo"){
            rightAnswer(2);
        } else {
            wrongAnswer(2);
        }
        
        // if(q2Response == "mo"){
        //     $("#q2Feedback").html("Correct!");
        //     $("#q2Feedback").attr("class", "bg-success text-white");
        //     $("#markImg2").html("<img src = 'img/checkmark.png' alt = 'checkmark'>");
        //     score += 20;
        // } else {
        //     $("#q2Feedback").html("Incorrect!");
        //     $("#q2Feedback").attr("class", "bg-warning text-white");
        //     $("#markImg2").html("<img src = 'img/xmark.png' alt = 'xmark'>");
        // }
        
        //Question 3
        if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")){
            rightAnswer(3);
        } else {
            wrongAnswer(3);
        }
        
        //Question 4
        if(q4Response == "Rhode Island"){
            rightAnswer(4);
        } else {
            wrongAnswer(4);
        }
        
        //Question 5
        if($("#seal2").css("background-color") == "rgb(137, 207, 240)") {
            rightAnswer(5);
        } else {
            wrongAnswer(5);
        }
        
        //Question 6
        if(q6Response == "California quail"){
            rightAnswer(6);
        } else {
            wrongAnswer(6);
        }
        
        //Question 7
        if(q7Response == "ak"){
            rightAnswer(7);
        } else {
            wrongAnswer(7);
        }
        
        //Question 8
        if(q8Response == "Lake Superior"){
            rightAnswer(8);
        } else {
            wrongAnswer(8);
        }
        
        if(score === 100){
            $("#congratulations").html("Congratulations on a perfect score!");
        }
        
        $("#totalScore").html(`Total Score: ${score}`);  
        $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
        localStorage.setItem("total_attempts", attempts);
        localStorage.setItem("total_Score", score);
    }
       
})//ready