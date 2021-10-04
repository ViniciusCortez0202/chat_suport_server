class Subject{
    #value = [];
    #observers = [];

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
        this.#observers.forEach(observer => {
            observer.update(this.#value);
        });
    }
}

module.exports = Subject;