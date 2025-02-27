class Bag {
    #owner
    constructor(weight, id, person) {
        this.weight = weight;
        this.id = id;
        this.#owner = person;
    }
}


module.exports = Bag;