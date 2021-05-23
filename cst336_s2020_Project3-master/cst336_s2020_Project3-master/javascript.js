$(document).ready(function(){
    
    $('#submitWeather').click(function(){
        var city = $("#city").val();
        var warm = "images/warm.jpg";
        var veryHot = "images/veryhot.jpeg";
        var hot = "images/Hot.png";
        var cold = "images/cold.jpg";
        var freezing = "images/freezing.jpg";
        
        if(city != ''){
            $.ajax({
               
               url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=0aa5e5f254be985411b1bdfc170de6e0",
               type: "GET",
               data: "json",
               success: function(data){
                    if(data.main.temp >= 100){
                        var img = "<center><img src= " + veryHot + "></center>";
                        $(".flex-container").html(img);
                    }
                    if(data.main.temp >= 70 && data.main.temp < 100){
                        var img = "<center><img src = " + hot + "></center>";
                        $(".flex-container").html(img);
                    }  
                    
                    if(data.main.temp >= 40 && data.main.temp < 70){
                        var img = "<center><img src = " + warm + "></center>";
                        $(".flex-container").html(img);
                    }  
                    
                    if(data.main.temp >= 32 && data.main.temp < 40){
                         var img = "<center><img src = " + cold + "></center>";
                        $(".flex-container").html(img);
                    }  
                    
                    if(data.main.temp < 32){
                        var img = "<center><img src = " + freezing + "></center>";
                        $(".flex-container").html(img);
                    }
                    
                    var widget = show(data);
                    $("#show").html(widget);
                    $("#city").val('');
               }
            });
        } else {
            $("error").html('Cannot be empty!');
        }
    });
});

function show(data){
    return "<h2>Current weather for " + data.name + ", " + data.sys.country + "</h2>" +
           "<h2>Weather: " + data.weather[0].main + "</h2>" +
           "<h3>Description: "+ data.weather[0].description +"</h3>" +
           "<h3>Temperature: "  + data.main.temp + "&#8457 </h2>" +
           "<h3>Humidity: "  + data.main.humidity + " %</h2>" +
           "<h3>Wind Speed: "  + data.wind.speed + " MPH </h2>";
}