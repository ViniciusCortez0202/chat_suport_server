const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

var dateTime = new Date();


io.on('connection', (socket) => { 

    console.log(socket.id);

    socket.on("information", (data) => {
        
    })

    socket.on("sender", (data) => {
        leitor.question(`Resposta: ${data.text}\n`, function(answer) {
            var resp = answer;
            socket.emit('response', {
                isMe: false,
                text: resp,
                time: `${dateTime.getHours()}:${dateTime.getMinutes() < 10 ? '0'+dateTime.getMinutes() : dateTime.getMinutes()}`,
                unread: false
            })            
        });
    });
 });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 app.use('/chamados', (request, response) => {
    var body = request.body;
    var novoChamado = {
        id: dateTime.getMilliseconds(),
        entepriseId: body.entepriseId,
        motivo: body.motivo,
        service: body.servico,
        status: body.status,
        descricao: body.descricao,
        data: `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`
    }
    chamados.push(novoChamado);
    console.log(chamados)
    response.send().status(200);
});

app.use('/getChamados', (request, response) => {
    console.log(chamados);
    response.status(200).json(chamados);
});
server.listen(5000, '10.0.0.104');