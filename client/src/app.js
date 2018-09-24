const Calculator = require('./models/Calculator');
const Journeys = require('./models/journeys');
const ChargePoints = require('./models/chargePoints');
const JourneysAllView = require('./views/journeys_all_view');
const JourneysFormView = require('./views/journeys_form_view');
const JourneysImpactView = require('./views/journeys_impact_view');

document.addEventListener ('DOMContentLoaded', () => {
  console.log('js loaded')

  const journeys = new Journeys();
  journeys.bindEvents();
  journeys.getData();

  const chargePoints = new ChargePoints();
  chargePoints.getData();
  
  
  // const viewRenderElement = document.querySelector('#render-view');
  // const journeysFormView = new JourneysFormView(viewRenderElement);
  // journeysFormView.bindEvents();

  const calclculator = new Calculator();
  calclculator.bindEvents();

  const allRenderElement = document.querySelector('#render-view')
  const journeysAllView = new JourneysAllView(allRenderElement);
  journeysAllView.bindEvents();


}) 
