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
                    type: Type.ENTERPRISE,
                    idUser: data.idUser,
                    codeEnterprise: data.codeEnterprise,
                    idCall: data.idCall,
                    message: data.message,
                    socketId: socket.id
                }
            } else if (data.type == Type.SUPORT.id) {
                message = {
                    type: Type.SUPORT,
                    idUser: data.idUser,
                    idCall: data.idCall,
                    message: data.message,
                    socketId: socket.id
                }
            }
            socket.join(message.idCall);
            controller.insertMessage(message);
            controller.sendMessage(message);
        });

        socket.on("auth", (data) => {
            let model;
            if (data.type == Type.ENTERPRISE.id) {
                model = {
                    type: Type.ENTERPRISE,
                    codeEnterprise: data.idEnterprise,
                    idUser: data.idUser,
                    socketId: socket.id
                }
            } else if (data.type == Type.SUPORT.id) {
                model = {
                    type: Type.SUPORT,
                    isUser: data.idUser,
                    socketId: socket.id
                }
            }
            controller.createAuthSocket(model);
        });



    });

    return { io }
}

module.exports = chatSuport;