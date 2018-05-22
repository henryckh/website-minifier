const express = require('express');
const app = express();

app.get('/build', function (req, res){
  res.sendFile(__dirname + '/build/index.html');
});

app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Original website on port 3000');
});