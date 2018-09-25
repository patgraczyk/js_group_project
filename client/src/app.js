const Calculator = require('./models/Calculator');
const Journeys = require('./models/journeys');
<<<<<<< HEAD
const JourneysAllView = require('./views/journeys_all_view');
const JourneysFormView = require('./views/journeys_form_view');
const JourneysImpactView = require('./views/journeys_impact_view');
const ChartView = require('./views/chart_view');

=======
const CurrentView = require('./views/current_view')
>>>>>>> develop

document.addEventListener ('DOMContentLoaded', () => {
  
  console.log('js loaded')

  const chartContainer = document.querySelector('#container');
  const resultChart = new ChartView(chartContainer);
  resultChart.bindEvents();
  
  const allImpactDisplay = document.querySelector('#impact-view')
  const journeysImpactView = new JourneysImpactView(allImpactDisplay);
  journeysImpactView.bindEvents();

  const journeys = new Journeys();
  journeys.bindEvents();
  journeys.getData();
<<<<<<< HEAD
  

  // const viewRenderElement = document.querySelector('#render-view');
  // const journeysFormView = new JourneysFormView(viewRenderElement);
  // journeysFormView.bindEvents();
=======

  const navElement = document.querySelectorAll('li');
  const currentView = new CurrentView(1, navElement);
  currentView.render();
  currentView.bindEvents();
>>>>>>> develop

  const calclculator = new Calculator();
  calclculator.bindEvents();

<<<<<<< HEAD
  // const allRenderElement = document.querySelector('#render-view')
  // const journeysAllView = new JourneysAllView(allRenderElement);
  // journeysAllView.bindEvents();


}) 
=======
}); 
>>>>>>> develop
