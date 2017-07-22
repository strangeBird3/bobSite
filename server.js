var http         = require('http');
var fs           = require('fs');
var path         = require('path');

var express = require('express');
var app = express();
var handlebars = require('express-handlebars');

var server_port = process.env.PORT || 8081;

app.set('views', __dirname + '/views');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('index.handlebars');
});

app.get('/photos', function(req,res){
    res.render('photos.handlebars');
});

app.get('/bobBooks', function(req, res){
	res.render('bobBooks')
});

app.get('/buyBob', function(req, res){
	res.render('buyBob')
});

app.get('/bobPg1', function(req, res){
	res.render('bobPg1', {layout: false});
});

app.get('/bobPg2', function(req, res){
	res.render('bobPg2', {layout: false});
});

app.get('/bobPg3', function(req, res){
	res.render('bobPg3', {layout: false});
});

app.get('/bobPg4', function(req, res){
	res.render('bobPg4', {layout: false});
});

app.get('/bobPg5', function(req, res){
	res.render('bobPg5', {layout: false});
});

app.get('/bobPg6', function(req, res){
	res.render('bobPg6', {layout: false});
});

app.get('/bobPg7', function(req, res){
	res.render('bobPg7', {layout: false});
});

app.get('/bobPg8', function(req, res){
	res.render('bobPg8', {layout: false});
});

app.get('/bobPg9', function(req, res){
	res.render('bobPg9', {layout: false});
});

app.get('/bobPg10', function(req, res){
	res.render('bobPg10', {layout: false});
});

app.get('/bobPg11', function(req, res){
	res.render('bobPg11', {layout: false});
});

app.get('/bobPg12', function(req, res){
	res.render('bobPg12', {layout: false});
});

app.get('/bobPg13', function(req, res){
	res.render('bobPg13', {layout: false});
});

app.get('/bobPg14', function(req, res){
	res.render('bobPg14', {layout: false});
});

app.get('/bobPg15', function(req, res){
	res.render('bobPg15', {layout: false});
});

app.listen(server_port, function(){
  console.log("Listening on port" + server_port);
});
