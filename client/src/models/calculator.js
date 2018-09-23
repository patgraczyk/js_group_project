const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Calculator = function(){
this.conversionFactors = [];
}


// gets on hold of the data of all journeys
Calculator.prototype.bindEvents = function (){
  PubSub.subscribe('Journeys:all-data-loaded', (evt) => {
    const carbonData = this.calculateTotalEmissions(evt.detail);
    const carnbonDataFuel = this.splitCalculationByFuel(evt.detail);
  });
  PubSub.publish('Journeys:carbon-data-loaded', carbonData);
  PubSub.publish('Journeys:carbon-data-by-fuel', carnbonDataFuel);
}

// takes a total of all journeys and looks at the overall emissions
Calculator.prototype.calculateTotalEmissions = function(allJourneys){
  let emissionsTotal = 0;
  for (journey in allJourneys) {
    emissionsTotal += this.calculateEmissions(journey);
  }
  return emissionsTotal;
};

// iterates over every journey to calculate emissions
// runs a function to get conversion factor for the journey
// does the calculation to calculate the actual emissions
Calculator.prototype.calculateEmissions = function(journeySubmitted) {
  // this.getConversionFactor(allJourneys)
  // allJourneys.forEach(journey => {
    return journey.distance * this.getConversionFactor(journey) * journey.numberOfJourneys;
    // five is a place holder for the actual conversion factor
  };
//   return ;
// }

// starts a function with a data of all journeys
// for each journey if fuel type and vehicle type are right returns a conversion factor
// carbonCalculator.prototype.getConversionFactor = function(journeySubmitted){
//     if journey.vehicle === 'car' {
//       return this.carJourneyFactor(journeySubmitted)
//     }
//     else if (journey.vehicle === 'motorbike' {
//       // return this.motorbikeJourneyFactor(journeySubmitted)
//       return 0.11529
//     }
//     else if (journey.vehicle === 'plane') {
//       return this.planeJourneyFactor(journeySubmitted)
//     }
//     else {
//       return travelInformation.ferry_emissions.conversion_factor
//     }
//   return conversionFactor;
// }

// carbonCalculator.prototype.carJourneyFactor(journey){
//   if journey.fuelType === 'petrol' {
//     return 0.11529;
//   }
//   if journey.fuelType === 'diesel' {
//     return 0.11145;
//   }
//   if journey.fuelType === 'hybrid'{
//     return 2.2;
//   }
// }


// creates a hash of all emissions by fuel type
// carbonCalculator.prototype.splitCalculationByFuel = function(allJourneys) {
//   const emissionsByFuelType = {}
//   for (const journey of allJourneys) {
//     if (emissionsByFuelType[journey.fuelType]) {
//       emissionsByFuelType[journey.fuelType] += journey.calculateEmissions;
//     }
//     else {
//       emissionsByFuelType[journey.fuelType] = 0;
//     }
//   }
//   return emissionsByFuelType;
// }
// }

// gets on hold of the data from the DB
// CarbonCalculator.prototype.allEmissionsConversionFactors = function() {
//   this.request
//     .get()
//     .then(() => {
//       this.conversionFactors = conversionFactors;
//     })
//     .catch((err) => console.error(err));
// };


module.exports = Calculator;
