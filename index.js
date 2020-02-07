var express = require('express'),
    path = require('path');

//create our express app
var app = express();

//routes
app.get('/', function(req, res) {
    res.render(path.join(__dirname+"/index1.ejs"));
});

//have our app listen on port 3000
app.listen(3000);
console.log('Your app is now running at: http://127.0.0.1:3000/');