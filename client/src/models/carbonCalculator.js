const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const carbonCalculator = function(){

}

// gets on hold of the data of all journeys
carbonCalculator.prototype.bindEvents = function (){
  PubSub.subscribe('Journeys:all-data-loaded', (evt) => {
    const carbonData = this.calculateTotalEmissions(evt.detail);
    const carnbonDataFuel = this.splitCalculationByFuel(evt.detail);
  });

  PubSub.publish('Journeys:carbon-data-loaded', carbonData);
  PubSub.publish('Journeys:carbon-data-by-fuel', something);
}


// takes a total of all journeys and looks at the overall emissions
carbonCalculator.prototype.calculateTotalEmissions = function(journeysDetails){
  let emissionsTotal = 0;
  for (journey in journeysDetails) {
    this.calculateEmissions(journey)
    co2Total += calculateEmissions[journey];
  }
  return emissionsTotal;
};


// iterates over every journey to calculate emissions
// runs a function to get conversion factor for the journey
// does the calculation to calculate the actual emissions
carbonCalculator.prototype.calculateEmissions = function(allJourneys) {
  this.getConversionFactor(allJourneys)
  allJourneys.forEach(journey => {
    journey.distance * this.getConversionFactor(journey) * journey.numberOfJourneys;
    // five is a place holder for the actual conversion factor
  })
  return something;
}

// starts a function with a data of all journeys
// for each journey if fuel type and vehicle type are right returns a conversion factor
carbonCalculator.prototype.getConversionFactor = function(allJourneys){
  forEach(journey => {
    journey.fueltype == fueltype && journey.vehicle == vehicle
  })
  return conversionFactor;
}

// creates a hash of all emissions by fuel type
carbonCalculator.prototype.splitCalculationByFuel = function(allJourneys) {
  const emissionsByFuelType = {}
  for (const journey of allJourneys) {
    if (emissionsByFuelType[journey.fuelType]) {
      emissionsByFuelType[journey.fuelType] += journey.calculateEmissions;
    }
    else {
      emissionsByFuelType[journey.fuelType] = 0;
    }
  }
  return emissionsByFuelType;
}
}

module.exports = carbonCalculator;
