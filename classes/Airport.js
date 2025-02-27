class Airport {
  #planes;
  static airportCode = "JFK";
  constructor(name, planes = []) {
    this.name = name;
    this.#planes = planes;
  }
  getPlanes() {
    return this.#planes;
  }
  addPlane(plane) {
    this.#planes.push(plane);
  }
}


module.exports = Airport;