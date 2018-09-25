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

  const chartContainer = document.querySelector('#container');
  const resultChart = new ChartView(chartContainer);
  resultChart.bindEvents();
  
  // const mapContainer = document.querySelector('#mapid');
  // const mapView = new MapView(mapContainer);
  // mapView.bindEvents();

  const journeys = new Journeys();
  journeys.bindEvents();
  journeys.getData();

  const bikes = new Bikes();
  bikes.getData();

  const chargePoints = new ChargePoints();
  chargePoints.getData();

  const calclculator = new Calculator();
  calclculator.bindEvents();

  const navElement = document.querySelectorAll('li');
  const currentView = new CurrentView(1, navElement);
  currentView.bindEvents();


}); 
