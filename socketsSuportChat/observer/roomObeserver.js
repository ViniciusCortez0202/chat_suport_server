const Messages = require("../repositories/socketMessageRepository")();

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

    update = async () => {
        const messages = await Messages.getAllMessages(this.#room);
        this.#io.of('/suport').in(this.#room).emit("message", messages.message);
    }
}
module.exports = RoomObserver;