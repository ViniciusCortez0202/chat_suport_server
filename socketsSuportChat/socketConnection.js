const Type = require("./enums/typesChat");
const socketController = require("./socket_controller");

chatSuport = (io) => {

    const controller = socketController(io);

    //io.of("/suport").disconnectSockets();
    io.of("/suport").on("connection", (socket) => {

        //authentication(socket.handshake.auth, socket.id);
        //Change to handshake.query because version socket
        authentication(socket.handshake.query, socket.conn.id);
        console.log(socket.conn.id)
        socket.on("message", async (data) => {

            //const rooms = await io.of("/suport").in(data.idCall).fetchSockets();
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
            controller.sendMessage(message, io);
        });

        // socket.on("auth", (data) => {
        //     let model;
        //     if (data.type == Type.ENTERPRISE.id) {
        //         model = {
        //             type: Type.ENTERPRISE,
        //             codeEnterprise: data.idEnterprise,
        //             idUser: data.idUser,
        //             socketId: socket.id
        //         }
        //     } else if (data.type == Type.SUPORT.id) {
        //         model = {
        //             type: Type.SUPORT,
        //             isUser: data.idUser,
        //             socketId: socket.id
        //         }
        //     }
        //     controller.createAuthSocket(model);
        // });



    });

    authentication = (auth, socketId) => {
        let model;
            if (auth.type == Type.ENTERPRISE.id) {
                model = {
                    type: Type.ENTERPRISE,
                    codeEnterprise: auth.codeEnterprise,
                    idUser: auth.idUser,
                    socketId: socketId
                }
            } else if (auth.type == Type.SUPORT.id) {
                model = {
                    type: Type.SUPORT,
                    idUser: auth.idUser,
                    socketId: socketId
                }
            }
            controller.createAuthSocket(model);
    }

    return { io }
}

module.exports = chatSuport;