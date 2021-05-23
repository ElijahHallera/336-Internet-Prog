var express = require('express');
var mysql = require('mysql');
var bodyParser = require("body-parser");
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'elijahhallera',
    password: 's@uc!n*$31',
    database: 'quotes_db'
});
connection.connect();

app.get('/', function(req, res){
  var sql = 'select country from l9_author';
    connection.query(sql, function(error, results) {
        if(error) throw error;
        var arr = [];
        results.forEach(function(r) {
            if (!arr.includes(r.country)) {
                arr.push(r.country);
            }
        });
        res.render('home', {countries: arr});
    });
});

app.get('/author', function(req, res){
    var sql = 'select * from l9_author where firstName=\''  + req.query.firstname + '\' and lastName=\'' + req.query.lastname + '\';'
	connection.query(sql, function(error, found){
	    var author = null;
	    if(error) throw error;
	    if(found.length){
	        author = found[0];
	        author.dob = author.dob.toString().split(' ').slice(0,4).join(' ');
	        author.dod = author.dod.toString().split(' ').slice(0,4).join(' ');
	    }
	    res.render('author', {author: author});
	});
});

app.get('/author/:aid', function(req, res){
    var quote = 'select quote, firstName, lastName ' + 'from l9_quotes, l9_author ' + 'where l9_quotes.authorId=l9_author.authorId ' + 'and l9_quotes.authorId=' + req.params.aid + ';'
    connection.query(quote, function(error, results){
        if(error) throw error;  
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});

app.get('/gender', function(req, res){
    var quote = 'select quote, firstName, lastName ' + 'from l9_quotes, l9_author ' + 'where sex=\'' + req.query.gender + '\';';
    connection.query(quote, function(error, results){
        if(error) throw error; 
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});

app.get('/keyword', function(req, res){
    var quote = 'select quote, firstName, lastName ' + 'from l9_quotes, l9_author ' + 'where l9_quotes.authorId=l9_author.authorId ' + 'and quote like\'%' + req.query.keyword + '%\';';
    connection.query(quote, function(error, results){
        if(error) throw error; 
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});

app.get('/category', function(req, res){
    var quote = 'select quote, firstName, lastName ' + 'from l9_quotes, l9_author ' + 'where l9_quotes.authorId=l9_author.authorId ' + 'and country=\'' + req.query.country + '\';';
    connection.query(quote, function(error, results){
        if(error) throw error;
        var name = results[0].firstName + ' ' + results[0].lastName;
        res.render('quotes', {name: name, quotes: results});      
    });
});

app.get('*', function(req, res){
   res.render('error'); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});