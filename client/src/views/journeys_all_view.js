const PubSub = require('../helpers/pub_sub.js');

const JourneysAllView = function(renderElement) {
  this.renderElement = renderElement;
}

JourneysAllView.prototype.bindEvents = function () {
  PubSub.subscribe('Journeys:data-loaded', (allJourneyData) => {
    console.log(`journeys all view received data: ${allJourneyData}`)
    this.renderFormView(allJourneyData.detail);
  });
};

JourneysAllView.prototype.renderFormView = function(allJourneyData){
  const newList = document.createElement('ul');
  allJourneyData.forEach(journey => {
    const distance = journey.distance;
    const vehicleType = journey.vehicleType;
    const fuelType = journey.fuelType;
    const listElement = this.createListElement(distance, vehicleType, fuelType);
    newList.appendChild(listElement)
  });
  this.renderElement.appendChild(newList);
}

JourneysAllView.prototype.createListElement = function(distance, vehicleType, fuelType){
  const newListElement = document.createElement('li');
  newListElement.innerHTML = `Distance: ${distance} Vehicle Type: ${vehicleType} Fuel Type: ${fuelType}`
  return newListElement;
}

JourneysAllView.prototype.handleSubmit = function (event) {
  // event.preventDefault();
  const main = document.querySelector('#add-journey');
  
  const header = document.createElement('h3');
  header.innerHTML = "New header"
  main.appendChild(header);
  
};

module.exports = JourneysAllView;


//subscribe to: 'Journeys:all-data-loaded'
