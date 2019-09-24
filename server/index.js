var express = require('express');
var socket = require('socket.io');

// App Setup
var app = express();
var server = app.listen(3003, function(){
    console.log("Listening on 3003");
});

// Socket Setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log("Socket Connected:", socket.id);

    socket.on('penis', function(data) {
        io.sockets.emit('penis2', {message: "Fuuuu"});
    });
});


