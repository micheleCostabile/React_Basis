var http = require('http');
var fs = require('fs');

// Carichiamo il file index.html e mostriamo la pagina al visitatore
var server = http.createServer(function (req, res) {
    fs.readFile('./index.html', 'utf-8', function (error, content) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
    });
});

// Carichiamo Socket.io
var io = require('socket.io').listen(server);

// Quando i client si connettono
io.sockets.on('connection', function (socket) {
    socket.emit('message', 'Sei connesso amico!');

    socket.on('connesso', function (username) {
        socket.username = username;
        console.log(socket.id + " - " + username)
        ////io.emit('ricevuto', `L'utente ${username} è entrato in chat`);
    });


    socket.on('tutti', function (messaggio) {
        //socket.username = username;
        io.emit('tuttiricevuto', `L'utente ${socket.username} comunica: ${messaggio}`);
    });

    socket.on('inviare', function (messaggio) {
        for (var socketid in io.sockets.sockets) {
            console.log(socketid);
        }




        ///// per inviare il messaggio ad un cliente ben preciso
        ///socket.broadcast.to(socketid).emit('message', 'for your eyes only');


        //socket.username = username;
        ////per inviare il messaggio a tutti anche il sender
        //io.emit('tuttiricevuto', `L'utente ${socket.username} comunica: ${messaggio}`);

        /////per inviare il messaggio a tutti, tranne ol senderf
        socket.broadcast.emit('tuttiricevuto', `L'utente ${socket.username} comunica: ${messaggio}`);
    });

    socket.on('message', function (message) {
        console.log(socket.username + ' sta parlando con me! Dice: ' + message);
    });

    socket.on('scritto', function (scritto) {
        console.log(socket.username + ' sta parlando con me! Dice: ' + scritto);

    });


});

server.listen(8888);