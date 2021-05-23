var express = require('express');
var request = require('request');
var faker = require('faker');
var app = express();


/* Configure our server to read public folder and ejs files */
app.use(express.static('public'));
app.set('view engine', 'ejs');

var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var jobTitle = faker.name.jobTitle();
var firstNameTwo = faker.name.firstName();
var lastNameTwo = faker.name.lastName();
var jobTitleTwo = faker.name.jobTitle();

/* The handler for the DEFAULT route */
app.get('/', function(req, res){
    res.render('home', {firstName: firstName, lastName: lastName, jobTitle: jobTitle,
        firstNameTwo: firstNameTwo, lastNameTwo: lastNameTwo, jobTitleTwo: jobTitleTwo});
});

app.get('/home', function(req, res){
    res.render('home', {firstName: firstName, lastName: lastName, jobTitle: jobTitle,
        firstNameTwo: firstNameTwo, lastNameTwo: lastNameTwo, jobTitleTwo: jobTitleTwo});
});

app.get('/compnet', function(req, res){
    res.render('compnet');
});

app.get('/proglang', function(req, res){
    res.render('proglang');
});

app.get('/viruses', function(req, res){
    res.render('viruses');
});

/* The handler for undefined routes */
app.get('*', function(req, res){
   res.render('error'); 
});

/* Start the application server */
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});