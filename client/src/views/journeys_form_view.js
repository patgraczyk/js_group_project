const PubSub = require('../helpers/pub_sub.js');

const JourneysFormView = function(form){
    this.form = form;
};

// subscribes to 'Form-view:all-data-loaded'
// publish to 'Form-view:journey-submitted'



JourneysFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
    console.log(`event submitted: ${event}`)
  });
};

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