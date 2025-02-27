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
}


module.exports = Bag;