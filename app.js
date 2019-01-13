var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')

server.listen(3000);

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat', function(req, res) {
  res.sendFile(__dirname + '/chat.html');
});

app.get('/my-report', function(req, res) {
  res.sendFile(__dirname + '/my-report.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
