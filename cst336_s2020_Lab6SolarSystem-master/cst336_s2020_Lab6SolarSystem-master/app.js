var express = require("express");
var app = express();

app.use(express.static("css"));
app.use(express.static("img"));
app.set("view engine", "ejs");

// app.engine('html', require('ejs').renderFile);
// app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index");
})

app.get("/mercury", function(req, res){
    res.render("mercury");
})

app.get("/venus", function(req, res){
    res.render("venus");
})

app.get("/earth", function(req, res){
    res.render("earth");
})

app.get("/mars", function(req, res){
    res.render("mars");
})

app.get("*", function(req, res){
    res.render("error");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...")
})