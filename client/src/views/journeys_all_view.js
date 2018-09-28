const PubSub = require('../helpers/pub_sub.js');
const elementHelper = require('../helpers/element_helper.js');

const JourneysAllView = function() {
  this.allJourneyData = null;
}

JourneysAllView.prototype.bindEvents = function(){
  PubSub.subscribe('Journeys:data-loaded', (allJourneyData) => {
    console.log(`Journey all view received \n\n ${allJourneyData.detail} \n\n from Journeys:data-loaded`)
    this.allJourneyData = allJourneyData.detail;
  });

  PubSub.subscribe('Journeys:data-loaded', (allJourneyData) => {
    this.allJourneyData = allJourneyData.detail;
    console.log(`Journey deleted. Journey all view received \n\n ${allJourneyData} \n\n from Journeys:journey-deleted`);
    this.renderFormView();
  })
};

JourneysAllView.prototype.renderFormView = function(){
   
  const renderElement = document.querySelector('#render-view')
  renderElement.innerHTML = '';
  const journeysAllViewContainer = document.createElement('div');
  journeysAllViewContainer.id = 'journeys_all_view_container';
  const viewContainer = document.createElement('div');
  viewContainer.id = "journeys-all-view";
  const newList = document.createElement('ul');
  
  const header = document.createElement('h1');
  header.id = "all_journeys_header";
  header.textContent = "All Journeys";
  renderElement.appendChild(header);

  this.allJourneyData.forEach(journey => {
    const distance = journey.distance;
    const vehicleType = journey.vehicleType;
    const fuelType = journey.fuelType;
    const id = journey._id;
    console.log(`item id: ${id}`)
    const listElement = this.createListElement(id, distance, vehicleType, fuelType);
    newList.appendChild(listElement)
  })
  viewContainer.appendChild(newList);
  journeysAllViewContainer.appendChild(viewContainer);
  renderElement.appendChild(journeysAllViewContainer);
  
  console.log(`Journeys all view rendered: ${newList}`)

};

JourneysAllView.prototype.createListElement = function(id, distance, vehicleType, fuelType){
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

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'submit')
  deleteButton.classList.add('delete-btn');
  deleteButton.id = id;
  deleteButton.value = 'Delete';

  const faIcon = document.createElement('i');
  faIcon.id = id;
  faIcon.classList.add("fa");
  faIcon.classList.add("fa-times-circle");
  faIcon.classList.add("fa-3x");
  deleteButton.appendChild(faIcon);

  deleteButton.addEventListener('click', (event) => {
    console.log('delete button clicked')
    if (confirm('Do you want to delete this journey?')) {
      PubSub.publish('JourneysAllView:journey-delete-clicked', event.target.id)
    };
  });

  newListElement.appendChild(distanceText);
  newListElement.appendChild(headerLine);
  newListElement.appendChild(distanceResult);
  newListElement.appendChild(vehicleLabel);
  newListElement.appendChild(vehicleLine);
  newListElement.appendChild(fuelLabel);
  newListElement.appendChild(fuelLine);
  newListElement.appendChild(deleteButton);
  // newListElement.appendChild(faIcon);
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
