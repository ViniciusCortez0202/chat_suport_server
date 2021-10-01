const Type = require("./enums/typesChat");
const controller = require("./enterprises/socketEnterprise_controller")();

chatSuport = (io) => {
    io.of("/suport").on("connection", (socket) => {
        console.log(socket.id)
        socket.on("message", async (data) => {

            const rooms = await io.of("/suport").in(data.idCall).fetchSockets();
            let message;
            if (data.type == Type.ENTERPRISE.id) {
                message = {
                    idUser: data.idUser,
                    codeEnterprise: data.codeEnterprise,
                    idCall: data.idCall,
                    message: data.message,
                }
            } else if (data.type == Type.SUPORT.id) {
                message = {
                    idUser: data.idUser,
                    idCall: data.idCall,
                    message: data.message,
                }
            }
            socket.join(message.idCall);
            controller.insertMessage(message);
            sendMessage(message);
        });

        socket.on("auth", (data) => {
            let model;
            if (data.type == Type.ENTERPRISE.id) {
                model = {
                    codeEnterprise: data.idEnterprise,
                    idUser: data.idUser,
                    socketID: socket.id
                }
            } else if (data.type == Type.SUPORT.id) {
                model = {
                    isUser: data.idUser,
                    socketID: socket.id
                }
            }
            controller.createAuthSocket(model);
        });



    });

    return { io }
}

module.exports = chatSuport;