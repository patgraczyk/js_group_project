const PubSub = require('../helpers/pub_sub.js');

const JourneysFormView = function(renderElement){
    this.renderElement = renderElement;
};

// subscribes to 'Form-view:all-data-loaded'
// publish to 'Form-view:journey-submitted'

JourneysFormView.prototype.bindEvents = function () {
  // this.form.addEventListener('submit', (event) => {
  //   this.handleSubmit(event);
  //   console.log(`event submitted: ${event}`)
  // });

  this.renderFormView();
};

JourneysFormView.prototype.renderFormView = function(){
  
  const header = document.createElement('h1');
  header.innerHTML = "Add a Journey";
  
  const form = document.createElement('form');
  form.id = "add-journey-form";
  
  const vehicleTypeLabel = document.createElement('label');
  vehicleTypeLabel.innerHTML = "Vehicle Type"
  vehicleTypeLabel.setAttribute('for', 'vehicleType');
  
  const vehicleSelect = document.createElement('select');
  vehicleSelect.setAttribute('name', 'vehicleType');
  
  const carOption = document.createElement('option');
  carOption.innerHTML = "Car";
  carOption.setAttribute('value', 'car');
  
  const motorbikeOption = document.createElement('option');
  motorbikeOption.innerHTML = "Motorbike";
  motorbikeOption.setAttribute('value', 'motorbike');
  
  const trainOption = document.createElement('option');
  trainOption.innerHTML = "train";
  trainOption.setAttribute('value', 'train');
  
  const airplaneOption = document.createElement('option');
  airplaneOption.innerHTML = "Airplane";
  airplaneOption.setAttribute('value', 'airplane');

  vehicleSelect.appendChild(carOption);
  vehicleSelect.appendChild(motorbikeOption);
  vehicleSelect.appendChild(trainOption);
  vehicleSelect.appendChild(airplaneOption);

  const fuelTypeLabel = document.createElement('label');
  fuelTypeLabel.innerHTML = "Fuel Type"
  fuelTypeLabel.setAttribute('for', 'fuelType');
  
  const fuelSelect = document.createElement('select');
  fuelSelect.setAttribute('name', 'fuelType');
  
  const petrolOption = document.createElement('option');
  petrolOption.innerHTML = "Petrol";
  petrolOption.setAttribute('value', 'petrol');
  
  const dieselOption = document.createElement('option');
  dieselOption.innerHTML = "Diesel";
  dieselOption.setAttribute('value', 'diesel');
  
  const hybridOption = document.createElement('option');
  hybridOption.innerHTML = "Hybrid";
  hybridOption.setAttribute('value', 'hybrid');
  
  const electricOption = document.createElement('option');
  electricOption.innerHTML = "Electric";
  electricOption.setAttribute('value', 'electric');

  fuelSelect.appendChild(petrolOption);
  fuelSelect.appendChild(dieselOption);
  fuelSelect.appendChild(hybridOption);
  fuelSelect.appendChild(electricOption);

  const distanceLabel = document.createElement('label');
  distanceLabel.innerHTML = "Distance"
  distanceLabel.setAttribute('for', 'distance');  

  const distanceInput = document.createElement('input');
  distanceInput.setAttribute('type', 'text');
  distanceInput.setAttribute('name', 'distance');

  const unitParagraph = document.createElement('p');
  unitParagraph.innerHTML = "Was this distance in miles or km?";

  const kmLabel = document.createElement('label');
  kmLabel.innerHTML = "KM";

  const kmInput = document.createElement('input');
  kmInput.id = 'unit-km';
  kmInput.setAttribute('type', 'radio');
  kmInput.setAttribute('name', 'unit');
  kmInput.setAttribute('value', 'KM');
  kmInput.setAttribute('checked','checked');

  const milesLabel = document.createElement('label');
  milesLabel.innerHTML = "Miles";

  const milesInput = document.createElement('input');
  milesInput.id = 'unit-miles';
  milesInput.setAttribute('type', 'radio');
  milesInput.setAttribute('name', 'unit');
  milesInput.setAttribute('value', 'Miles');

  const optionalParagraph = document.createElement('p');
  optionalParagraph.innerHTML = "Was this journey optional?";

  const yesLabel = document.createElement('label');
  yesLabel.innerHTML = "Yes";

  const yesInput = document.createElement('input');
  yesInput.id = 'optional-yes';
  yesInput.setAttribute('type', 'radio');
  yesInput.setAttribute('name', 'optional');
  yesInput.setAttribute('value', 'Yes');
  yesInput.setAttribute('checked','checked');

  const noLabel = document.createElement('label');
  noLabel.innerHTML = "No";

  const noInput = document.createElement('input');
  noInput.id = 'optional-no';
  noInput.setAttribute('type', 'radio');
  noInput.setAttribute('name', 'optional');
  noInput.setAttribute('value', 'No');

  const submitButton = document.createElement('input');
  submitButton.id = 'save-btn'
  submitButton.setAttribute('value', 'Save');
  submitButton.setAttribute('type', 'submit');

  form.appendChild(vehicleTypeLabel);
  form.appendChild(vehicleSelect);
  form.appendChild(fuelTypeLabel);
  form.appendChild(fuelSelect);
  form.appendChild(distanceLabel);
  form.appendChild(distanceInput);
  form.appendChild(unitParagraph);
  form.appendChild(kmLabel);
  form.appendChild(kmInput);
  form.appendChild(milesLabel);
  form.appendChild(milesInput);
  form.appendChild(optionalParagraph);
  form.appendChild(yesLabel);
  form.appendChild(yesInput);
  form.appendChild(noLabel);
  form.appendChild(noInput);
  form.appendChild(submitButton);

  this.renderElement.appendChild(header);
  this.renderElement.appendChild(form);


}

JourneysFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newJourney = this.createJourney(event.target);
  console.log(`new journey object created: ${newJourney}`)
  PubSub.publish('Form-view:journey-submitted', newJourney);
  console.log(`journey published: ${newJourney}`)
  event.target.reset();
};

JourneysFormView.prototype.createJourney = function (form) {
  const newJourney = {
    distance: form.distance.value,
    vehicleType: form.vehicleType.value,
    fuelType: form.fuelType.value
  };
  console.log(`new journey object: ${newJourney}`)
  return newJourney;
};

module.exports = JourneysFormView;