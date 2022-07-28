export class SocketServer{

    static createSocket = (io, server, options = {}) => {

        const connection = io(server, options);
        
        return { connection }
    }
}