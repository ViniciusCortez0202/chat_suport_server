const Type = require("./enums/typesChat");
const controllerEnterprise = require("./enterprises/socketEnterprise_controller")();
const controllerSuport = require("./suports/socketSuport_controller")();

chatSuport = (io) => {
    io.of("/suport").on("connection", (socket) => {

        socket.on("message", (data) => {
            if(data.type == Type.ENTERPRISE.id){

            } else if(data.type == Type.SUPORT.id){

            } else {

            }
        });

        socket.on("auth", (data) => {
    
            if(data.type == Type.ENTERPRISE.id){
                const model = {
                    codeEnterprise: data.idEnterprise,
                    userId: data.idUser,
                    socketID: socket.id
                }
                controllerEnterprise.createAuthSocket(model);
            } else if(data.type == Type.SUPORT.id){
                const model = {
                    userId: data.idUser,
                    socketID: socket.id
                }
                controllerSuport.createAuthSocket(model);
            } else {
                
            }
        });



    });

    return { io }
}

module.exports = chatSuport;