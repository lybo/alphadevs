var PORT = process.env.PORT || 5000;
var ENV = process.env.NODE_ENV || 'development'

// var server = deployd({
//     port: port,
//     env: 'production',
//     db: {
//         host: 'localhost',
//         port: 27017,
//         name: 'libedevs',
//         // credentials: {
//         //     username: 'username',
//         //     password: 'password'
//         // }
//     }
// });
//
// server.listen();
//
// server.get('/auth/github/callback', function () {
//     
//
// });
//
// server.on('listening', function() {
//     console.log("Server is listening on " + port);
// });
//
// server.on('error', function(err) {
//     console.error(err);
//     process.nextTick(function() { // Give the server a chance to return an error
//         process.exit();
//     });
// });


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


// app.get('/auth/github/callback', function (req, res) {
//     console.log('github', res);
//     var port = ENV === 'development' ? 3000 : 5000;
//     var host = ENV === 'development' ? 'localhost' : 'alphdevs.org';
//     // res.send('http://' + host + ':' + port + '/#/dashboard');
//     res.send(`
//     
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Alphadev.org</title>
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
//         <script>
//             setTimeout(function () {
//                 // window.location.href = 'http://${host}:${port}/#/dashboard';
//             }, 100);
//         </script>
//     </head>
//     <body>
//         <div id="root">Redirect to Alphadev.org</div>
//     </body>
// </html>
//     `);
// });

// After attach, express can use server.handleRequest as middleware
app.use(server.handleRequest);


// start server
server.listen(PORT, function() {
    console.log("Server is listening on " + PORT);
});
