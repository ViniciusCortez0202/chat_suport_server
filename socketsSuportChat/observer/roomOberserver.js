class RoomObserver{
    #subjetc;
    #io;

    constructor(value, io) {
        this.#subjetc = value;
        this.#io = io;
        this.#subjetc.attachObserver(this);
    }

    update = (value) => {
        console.log(value);
    }
}
module.exports = RoomObserver;