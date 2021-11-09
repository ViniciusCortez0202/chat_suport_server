class MessagesStack{

    #messages = [];

    pop = () => {
        return this.#messages.pop();        
    }

    push = (message) => {
        this.#messages.push(message);
    }

    front = () => {
        return this.#messages[this.#messages.lastIndexOf()];
    }
}

module.exports = MessagesStack;