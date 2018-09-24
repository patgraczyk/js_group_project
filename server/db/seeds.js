// seed data here

use travelInformation;
db.dropDatabase();


db.journeys.insertMany([
  {
    distance: "20",
    vehicleType: "car",
    fuelType: "petrol"
  }
]);