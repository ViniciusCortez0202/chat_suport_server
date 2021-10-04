const Messages = require("../socketMessageRepository")();

class RoomObserver{
    #subjetc;
    #io;
    #room;

    constructor(value, io, room) {
        this.#subjetc = value;
        this.#io = io;
        this.#room = room;
        this.#subjetc.attachObserver(this);
    }

    update = (value) => {
        this.#io.of('/suport').in(this.#room).emit("message", Messages.getAllMessagesNotRead());
    }
}
module.exports = RoomObserver;