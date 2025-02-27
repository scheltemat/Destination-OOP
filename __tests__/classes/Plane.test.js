const Plane = require("../../classes/Plane");

describe("Plane tests", () => {
  const plane1 = new Plane("Delta", "Houston");

  test("Can create an instance of Plane object", () => {
    expect(plane1 instanceof Plane).toBeTruthy();
  });

  test("Company, origin, and destination are assigned correct values", () => {
    expect(plane1.company).toEqual("Delta");
    expect(plane1.origin).toEqual("JFK");
    expect(plane1.destination).toEqual("Houston");
  });

  test("Passengers initializes as empty array", () => {
    const plane = new Plane("United", "ORD");
    expect(plane.getPassengers()).toEqual([]);
  });

  test("Can add passenger", () => {
    plane1.addPassenger("Tommy");
    expect(plane1.getPassengers()).toEqual(["Tommy"])
  });
  
});