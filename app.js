var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var nsp = io.of('/cht');

nsp.on('connection', function(socket){
socket.on('event', function(data,msg){ nsp.emit(data,msg); });
});

	



http.listen(3000, function(){
  console.log('listening on *:3000');
});