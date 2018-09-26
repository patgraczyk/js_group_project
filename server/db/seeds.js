// seed data here

use travelInformation;
// db.dropDatabase();


db.journeys.insertMany([
  {
    distance: "20",
    vehicleType: "car",
    fuelType: "petrol",
    optional: "yes"
  },
  {
    distance: "40",
    vehicleType: "train",
    fuelType: "petrol",
    optional: "no"
  },
  {
    distance: "60",
    vehicleType: "car",
    fuelType: "petrol",
    optional: "yes"
  }
]);