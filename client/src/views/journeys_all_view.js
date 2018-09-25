const PubSub = require('../helpers/pub_sub.js');

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

const elementHelper = function(tagName, attributes){ // This would be called like this: const newListElement = elementHelper('li', {'class': 'card'});
  const element = document.createElement(tagName);
  for(const attrib in attributes) // not sure if const okay
    element.setAttribute(attrib, attributes[attrib]);
  return element;
}

JourneysAllView.prototype.renderFormView = function(allJourneyData){
  const newList = document.createElement('ul');
  newList.setAttribute('class', 'cards');
  allJourneyData.forEach(journey => {
    const distance = journey.distance;
    const vehicleType = journey.vehicleType;
    const fuelType = journey.fuelType;
    const listElement = this.createListElement(distance, vehicleType, fuelType);
    newList.appendChild(listElement)
  });
  this.renderElement.appendChild(newList);
}

// JourneysAllView.prototype.createListElement = function(distance, vehicleType, fuelType){
//   const newListElement = document.createElement('li');
//   newListElement.setAttribute('class', 'card');
//   newListElement.innerHTML = `Distance: ${distance} <br/> Vehicle Type: ${vehicleType} <br/> Fuel Type: ${fuelType}`
//   return newListElement;
// }

JourneysAllView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const main = document.querySelector('#add-journey');
  
  const header = document.createElement('h3');
  header.innerHTML = "New header"
  main.appendChild(header);
  
};

module.exports = JourneysAllView;


//subscribe to: 'Journeys:all-data-loaded'
