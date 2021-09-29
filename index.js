//libaries and frameorks
const express = require('express');
const http = require('http');
const io = require('socket.io');

//servers
const httpServer = require("./servers/httpServer");
const socketServer = require("./servers/socketServer");

//create servers
const serverConnection = httpServer.createServer(http, express);
const socketConnection = socketServer.createSocket(io, serverConnection.server);

//socket suport chat
const chat = require('./socketsSuportChat/socketConnection')(socketConnection.connection);


/*io.of('/suport').on('connection', (socket) => { 
    console.log("Enterprise " + socket.id);
    socket.join("room1");
    //console.log(io.to("room1"));
    socket.on("auth", (data) => {
        console.log(data);
        suport.to("room1").emit("send", "Entrou na room");
    })
 });*/

 //server.listen(5000, '10.0.0.102');
 // app.use(express.json());
 // app.use(express.urlencoded({ extended: false }));
 //  app.use('/chamados', (request, response) => {
 //     var body = request.body;
 //     var novoChamado = {
 //         id: dateTime.getMilliseconds(),
 //         entepriseId: body.entepriseId,
 //         motivo: body.motivo,
 //         service: body.servico,
 //         status: body.status,
 //         descricao: body.descricao,
 //         data: `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`
 //     }
 //     chamados.push(novoChamado);
 //     console.log(chamados)
 //     response.send().status(200);
 // });
 
 // app.use('/getChamados', (request, response) => {
 //     console.log(chamados);
 //     response.status(200).json(chamados);
 // });