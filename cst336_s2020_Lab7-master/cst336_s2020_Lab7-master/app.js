const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //folder for images, css, js
app.use(express.static("css"));
const request = require('request');

var keyword = ["wagon", "piano", "cards", "watch", "bowl", "charger", "forks", "flag", "shirts", "ducks"]

//routes
app.get("/", async function(req, res){
 let newKeyword = Math.floor(Math.random() * 10);
 let orientation_value = req.query.orientation;
 let parsedData = await getImages(keyword[newKeyword], orientation_value);
 res.render("index", {"images":parsedData});
});

app.get("/results", async function(req, res){
    
    //console.dir(req);
    let keyword = req.query.keyword; //gets the value that the user typed in the form using the GET method
    let orientation_value = req.query.orientation;
    let parsedData = await getImages(keyword, orientation_value);
    res.render("results", {"images":parsedData});
    
});


//Returns all data from the Pixabay API as JSON format
function getImages(keyword, orientation_value){
    
    return new Promise( function(resolve, reject){
        request('https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=' + keyword + "&orientation=" + orientation_value,
                 function (error, response, body) {
    
            if (!error && response.statusCode == 200  ) { //no issues in the request
                 let parsedData = JSON.parse(body); //converts string to JSON
                 resolve(parsedData);
                
            } else {
                reject(error);
                console.log(response.statusCode);
                console.log(error);
            }
          });//request
    });
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});