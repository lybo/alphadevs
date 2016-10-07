var PORT = process.env.PORT || 5000;
var ENV = process.env.NODE_ENV || 'development'

// setup http + express + socket.io
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {'log level': 0});

// setup deployd
require('deployd').attach(server, {
    socketIo: io,  // if not provided, attach will create one for you.
    env: ENV,
    db: {
        host: 'localhost',
        port: 27017,
        name: 'libedevs',
        // credentials: {
        //     username: 'username',
        //     password: 'password'
        // }
    }
});

// io.on('connection', function (socket) {
//     console.log('start');
//     socket.on('user:update', function (data) {
//         console.log('user:update', data); // emit()ed from the server
//     });
//     setTimeout(function () {
//         socket.emit('user:update', 'test');
//     }, 500);
// });


// After attach, express can use server.handleRequest as middleware
app.use(server.handleRequest);



app.get('/dashboard', function(req, res) {
    res.redirect('/#/dashboard');
});


// start server
server.listen(PORT, function() {
    console.log("Server is listening on " + PORT);
});
