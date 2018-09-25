const Calculator = require('./models/Calculator');
const Journeys = require('./models/journeys');
const JourneysImpactView = require('./views/journeys_impact_view');
const ChartView = require('./views/chart_view');
const CurrentView = require('./views/current_view');
const MapView = require('./views/map_view');
const Bikes = require('./models/bikes');
const ChargePoints = require('./models/charge_points');


document.addEventListener ('DOMContentLoaded', () => {
  
  console.log('js loaded')

  // const chartContainer = document.querySelector('#container');
  // const resultChart = new ChartView(chartContainer);
  // resultChart.bindEvents();
  
  // const allImpactDisplay = document.querySelector('#render-view')
  // const journeysImpactView = new JourneysImpactView(allImpactDisplay);
  // journeysImpactView.bindEvents();

  const mapContainer = document.querySelector('#mapid');
  const mapView = new MapView(mapContainer);
  mapView.bindEvents();

  const journeys = new Journeys();
  journeys.bindEvents();
  journeys.getData();

  const bikes = new Bikes();
  bikes.getData();

  const chargePoints = new ChargePoints();
  chargePoints.getData();

  const calclculator = new Calculator();
  calclculator.bindEvents();

<<<<<<< HEAD
  const navElement = document.querySelectorAll('li');
  const currentView = new CurrentView(3, navElement);
  currentView.render();
=======
  // const navElement = document.querySelectorAll('li');
  // const currentView = new CurrentView(2, navElement);
  // currentView.render();
>>>>>>> 2de2b7faca81b407df6e2ffac796353f4500171a


}); 
