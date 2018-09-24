const Calculator = require('./models/Calculator');
const Journeys = require('./models/journeys');
const JourneysAllView = require('./views/journeys_all_view');
const JourneysFormView = require('./views/journeys_form_view');
const JourneysImpactView = require('./views/journeys_impact_view');

document.addEventListener ('DOMContentLoaded', () => {
  console.log('js loaded')
  
  const journeys = new Journeys();
  journeys.bindEvents();
  journeys.getData();
  
  const journeysForm = document.querySelector('form#add-journey-form');
  const journeysFormView = new JourneysFormView(journeysForm);
  journeysFormView.bindEvents();

  const calclculator = new Calculator();
  calclculator.bindEvents();

}) 
