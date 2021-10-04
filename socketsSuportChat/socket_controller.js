const Messages = require("./socketMessageRepository");
const Subject = require('./observer/subject')
const RoomObserver = require('./observer/roomObeserver');

const mapSubjects = new Map();
Controller = () => {

    createAuthSocket = (value) => {
        
    }

    insertMessage = (value) => {

    }

    sendMessage = (value, io) => {
        
        if(mapSubjects.has(value.idCall)){
            mapSubjects.get(value.idCall).setValue(value.socketId);
        } else {
            const subject = new Subject();
            new RoomObserver(subject, io, value.idCall);
            subject.setValue(value.socketId);
            mapSubjects.set(value.idCall, subject);

        }
        
    }

    return { createAuthSocket, insertMessage, sendMessage }
}

module.exports = Controller;
