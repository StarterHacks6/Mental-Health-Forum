var app = require('express')();
var server = require('http').Server(app);
const express = require('express')
var port = process.env.PORT || 3000;

var io = require('socket.io')(server);

app.use(express.static('public'))


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

app.listen(port, () => console.log(`Mental app listening on port ${port}!`))
