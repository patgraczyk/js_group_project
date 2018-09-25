const Calculator = require('./models/Calculator');
const Journeys = require('./models/journeys');
const CurrentView = require('./views/current_view')

document.addEventListener ('DOMContentLoaded', () => {
  
  console.log('js loaded')

  const journeys = new Journeys();
  journeys.bindEvents();
  journeys.getData();

  const navElement = document.querySelectorAll('li');
  const currentView = new CurrentView(1, navElement);
  currentView.render();
  currentView.bindEvents();

  const calclculator = new Calculator();
  calclculator.bindEvents();

}); 
