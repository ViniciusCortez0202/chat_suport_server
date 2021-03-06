import { ENTERPRISE, SUPORT } from "../enums/typesChat";
import socketController from "./socket_controller";

export default chatSuport = (io) => {

    const controller = socketController(io);

    //io.of("/suport").disconnectSockets();
    io.of("/suport").on("connection", (socket) => {        
        //authentication(socket.handshake.auth, socket.id);
        //Change to handshake.query because version socket
        authentication(socket.handshake.query, socket.id);
        
        //console.log(socket.conn.id)
        socket.on("message", (data) => {

            //const rooms = await io.of("/suport").in(data.idCall).fetchSockets();
            
            let message;
            if (data.type == ENTERPRISE.id) {
                message = {
                    type: ENTERPRISE,
                    idUser: data.idUser,
                    codeEnterprise: data.codeEnterprise,
                    idCall: data.idCall,
                    time: data.time,
                    message: data.message,
                    socketId: socket.id
                }
            } else if (data.type == SUPORT.id) {
                message = {
                    type: SUPORT,
                    idUser: data.idUser,
                    idCall: data.idCall,
                    time: data.time,
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
            if (auth.type == ENTERPRISE.id) {
                model = {
                    type: ENTERPRISE,
                    codeEnterprise: auth.codeEnterprise,
                    idUser: auth.idUser,
                    socketId: socketId
                }
            } else if (auth.type == SUPORT.id) {
                model = {
                    type: SUPORT,
                    idUser: auth.idUser,
                    socketId: socketId
                }
            }
            controller.createAuthSocket(model);
    }

    return { io }
}