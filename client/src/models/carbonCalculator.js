const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const carbonCalculator = function(){

}

// gets on hold of the data of all journeys

carbonCalculator.prototype.bindEvents = function (){
  PubSub.subscribe('Journeys:all-data-loaded', (evt) => {
    const userJourneyDetials = this.data(evt.detail)
    this.calculateEmissions(userJourneyDetials);
  });
}

// takes a total of all journeys and looks at the overall emissions 
carbonCalculator.prototype.calculateTotalEmissions = function(){
  let co2Total = 0;
  for (journey in userJourneyDetials) {
    co2Total += calculateEmissions[journey];
  }
};


// iterates over every journey to calculate emissions
// runs a function to get conversion factor for the journey
// does the calculation to calculate the actual emissions
carbonCalculator.prototype.calculateEmissions = function(allJourneys) {
  this.getConversionFactor(allJourneys)
  allJourneys.forEach(journey => {
    journey.distance * 5
    // five is a place holder for the actual conversion factor
  })
  PubSub.publish('Journeys:carbon-data-loaded', something);
  return something;
}

// starts a function with a data of all journeys
// for each journey if fuel type and vehicle type are right returns a conversion factor
carbonCalculator.prototype.getConversionFactor = function(allJourneys){
  forEach(journey => {
    if journey.fueltype == fueltype && journey.vehicle == vehicle
    return conversionFactor;
  })
}

module.exports = carbonCalculator;
