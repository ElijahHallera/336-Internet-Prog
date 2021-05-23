// $("#orientation").on("change", function(){
//     let oritentationResponse = $("#orientation").val();
//     var ori;
//     if(oritentationResponse == "horizontal"){
//         ori = "horizontal";
//     } else if (oritentationResponse == "vertical"){
//         ori = "vertical";
//     }
// });


$("#keyword").on("change", function(){
        $.ajax({
          method: "GET",
             url: "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=" + "#keyword" + "&orientation=vertical" + "&image_type=vector",
        dataType: "json",
            data: { "tags": $("#tags").val(), "previewURL": $("#previewURL").val(), "likes": $("#likes").val() },
         success: function(result,status) {
                for(let i = 0; i < 4; i++){
                    $("#likes").append("<p2> Likes: </p2> <p>" + result.hits[i].likes + "</p>" );
                }
                $("#break").html("</br>");    
                $("#break").html("</br>");  
                for(let i = 0; i < 4; i++){
                    $("#previewURL").append(`<img src = "` + result.hits[i].previewURL + `">` );
                }
              }
        });//ajax
});