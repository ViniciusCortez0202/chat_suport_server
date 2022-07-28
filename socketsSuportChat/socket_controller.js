const auth = require("./repositories/sokcetAuthRepository")();
import Subject from './observer/subject';
import RoomObserver from './observer/roomObeserver';
const Message = require('./repositories/socketMessageRepository')();

// Guarda as salas abertas
const mapSubjects = new Map();
export default Controller = (io) => {

    createAuthSocket = (value) => {
        auth.insertUserSocket(value);
    }

    insertMessage = (value) => {

    }

    sendMessage = (value) => {
        //Verifica se já existe uma sala aberta com esse idCall
        // se já existir basta colocar o socketId na lista
        // if(mapSubjects.has(value.idCall)){
        //     mapSubjects.get(value.idCall).setValue(value.socketId);            
        // } else {
        //     const subject = new Subject();
        //     new RoomObserver(subject, io, value.idCall);
        //     subject.setValue(value.socketId);
        //     mapSubjects.set(value.idCall, subject);
            
        // }
        console.log(value)
        io.of('/suport').in(value.idCall).emit("message", value);

        Message.setMessages(value.idCall, value);
    }

    return { createAuthSocket, insertMessage, sendMessage }
}