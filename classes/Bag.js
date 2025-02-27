class Bag {
    #owner
    constructor(weight, id, person = null) {
        this.weight = weight;
        this.id = id;
        this.#owner = person;
    }
    getOwner() {
        return this.#owner;
    }
    assignOwner(person) {
        this.#owner = person;
    }
}


module.exports = Bag;