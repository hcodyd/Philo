var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.get('/life', function(req, res) {
    res.sendFile(path.join(__dirname + '/tree_of_life_index.html'));
});

app.get('/life.txt', function(req, res) {
    res.sendFile(path.join(__dirname + '/life.txt'));
});


app.get('/interactive_tree.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/interactive_tree.css'));
    
});
app.get('/math_map_compact.json', function(req, res) {
    res.sendFile(path.join(__dirname + '/math_map_compact.json'));
    
});

app.listen(8080);