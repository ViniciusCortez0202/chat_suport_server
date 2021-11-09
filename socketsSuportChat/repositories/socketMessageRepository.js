const rooms = new Map();
const MessagesStack = require('../structs/messages_stack');

Messages = () => {
    getAllMessages = (idCall) => {
        if(rooms.has(idCall)){
            const stack = rooms.get(idCall);
            return stack;
        } else {
        }
    }

    setMessages = (idCall, value) => {
        if(rooms.has(idCall)){
            rooms.get(idCall).push(value)
        } else {
            rooms.set(idCall, new MessagesStack());
        }
    }

    return { getAllMessages, setMessages }
}

module.exports = Messages;