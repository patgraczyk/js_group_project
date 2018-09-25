const PubSub = require('../helpers/pub_sub.js');
const elementHelper = require('../helpers/element_helper.js');

const JourneysAllView = function() {
  this.allJourneyData = null;
}

JourneysAllView.prototype.renderFormView = function(){
  PubSub.subscribe('Journeys:data-loaded', (allJourneyData) => {
    
    console.log(`journeys all view received data: ${allJourneyData}`)
    this.allJourneyData = allJourneyData.detail;
    const renderElement = document.querySelector('#render-view')
    const newList = document.createElement('ul');
    
    this.allJourneyData.forEach(journey => {
      const distance = journey.distance;
      const vehicleType = journey.vehicleType;
      const fuelType = journey.fuelType;
      const listElement = this.createListElement(distance, vehicleType, fuelType);
      newList.appendChild(listElement)
    })
    renderElement.appendChild(newList)
  })
  
};

JourneysAllView.prototype.createListElement = function(distance, vehicleType, fuelType){
  const newListElement = elementHelper('li', {
    'class': 'card'
  });
  const distanceText = elementHelper('p', {
    'class': 'distanceLabel'
  });
  const headerLine = elementHelper('hr',{
    'class': 'cardHeading'
  });
  const distanceResult = elementHelper('p', {
    'class': 'distanceResult'
  });
  const vehicleLabel = elementHelper('p', {
    'class': 'vehicleLabel'
  });

  const vehicleLine = elementHelper('hr', {
    'class': 'vehicleLine'
  });

  const fuelLabel = elementHelper('p', {
    'class': 'fuelLabel'
  });

  const fuelLine = elementHelper('hr', {
    'class': 'fuelLine'
  });

  distanceText.innerHTML = 'Distance'
  distanceResult.innerHTML = `${distance} <span style = "font-size: 16px;">miles</span>`

  vehicleLabel.innerHTML = `Vehicle ${vehicleType}`

  fuelLabel.innerHTML = `Fuel ${fuelType}`

  newListElement.appendChild(distanceText);
  newListElement.appendChild(headerLine);
  newListElement.appendChild(distanceResult);
  newListElement.appendChild(vehicleLabel);
  newListElement.appendChild(vehicleLine);
  newListElement.appendChild(fuelLabel);
  newListElement.appendChild(fuelLine);
  return newListElement;
}

JourneysAllView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const main = document.querySelector('#add-journey');
  const header = document.createElement('h3');
  header.innerHTML = "New header"
  main.appendChild(header);
  
};

module.exports = JourneysAllView;


//subscribe to: 'Journeys:all-data-loaded'
