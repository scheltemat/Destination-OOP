const Airport = require("../../classes/Airport");

describe("Airport tests", () => {
  const planes = ["Plane1", "Plane2"];
  const airport1 = new Airport("Bush Intercontenental Airport", planes);

  test("Can create an instance of Airport object", () => {
    expect(airport1 instanceof Airport).toBeTruthy();
  });

  test("Can assign correct values to name and planes", () => {
    const planes = airport1.getPlanes();
    expect(airport1.name).toEqual("Bush Intercontenental Airport");
    expect(planes).toEqual(["Plane1", "Plane2"]);
  });

  test("Airport code has correct value", () => {
    expect(Airport.airportCode).toEqual("JFK");
  });

  test("Planes initializes as empty array", () => {
    const airport2 = new Airport("Bush Intercontenental Airport");
    expect(airport2.getPlanes()).toEqual([]);
  });

  test("Can add plane", () => {
    airport1.addPlane("Plane3");
    expect(airport1.getPlanes()).toEqual(["Plane1", "Plane2", "Plane3"]);
  });

});