class IoMediator{

    _io;

    setIo(io){
        this._io = io;
    }

    joinRoom = (socketId, idCall) => {
        this._io.of("/suport").in(socketId).socketsJoin(idCall);
    }

}

module.exports = IoMediator;