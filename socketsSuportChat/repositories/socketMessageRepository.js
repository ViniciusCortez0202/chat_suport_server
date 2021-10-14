Messages = () => {
    getAllMessagesNotRead = (idCall) => {
        return {
            message: "Isso é um teste"
        }
    }

    setMessages = (idCall, value) => {

    }

    return { getAllMessagesNotRead, setMessages }
}

module.exports = Messages;