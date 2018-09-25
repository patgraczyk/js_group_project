// seed data here

use travelInformation;
// db.dropDatabase();


db.journeys.insertMany([
  {
    distance: "20",
    vehicleType: "car",
    fuelType: "petrol"
  },
  {
    distance: "40",
    vehicleType: "train",
    fuelType: "petrol"
  },
  {
    distance: "60",
    vehicleType: "car",
    fuelType: "petrol"
  }
]);