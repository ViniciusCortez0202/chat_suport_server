class Subject{
    #value = new Set();
    #observers;

    setValue(value){
        this.#value.push(value);
        this.notifyAll();
    }

    removeValue(value){
        let remove = this.#value.indexOf(value);
        this.#value.splice(remove, 1);

    }

    attachObserver = (observer) =>{
        this.#observers.push(observer);
    }

    detachObserver = (observer) => {
        let value = this.#observers.indexOf(observer);
        this.#observers.splice(value, 1);
    }

    notifyAll(){
        this.#observers.update(this.#value);
    }
}

module.exports = Subject;