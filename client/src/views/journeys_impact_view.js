const PubSub = require('../helpers/pub_sub.js');
const elementHelper = require ('../helpers/element_helper.js');

const JourneysImpactView = function(){
  this.container = null;
  this.viewDiv = null;
  this.theNumber = null;
  this.theDistance = null;
  this.projection = null;
  this.splitVehicle = null;
  this.splitFuel = null;
  this.chart =null;
}

// JourneysImpactView.prototype.bindEvents = function(){
  
//   PubSub.subscribe('Journeys:carbon-data-loaded', (event) => {
//    this.theNumber =  event.detail; 
//   }) 
//   PubSub.subscribe('Journeys:carbon-data-distance', (event) => {
//     this.theDistance =  event.detail; 
//    })
//   PubSub.subscribe('Journeys:carbon-data-projections', (event) => {
//     this.projection =  event.detail; 
//   })  
//   PubSub.subscribe('Journeys:carbon-data-by-vehicle', (event) => {
//     this.splitVehicle =  event.detail; 
//   })
//   PubSub.subscribe('Journeys:carbon-data-by-fuel', (event) => {
//     this.splitFuel =  event.detail; 
//   })
// }

// JourneysImpactView.prototype.renderAll = function () {  
//   this.render(this.theNumber);
//   this.renderDistance(this.theDistance);
//   this.renderProjections(this.projection);
//   this.renderFilter(this.splitVehicle);
//   this.renderFilterFuel(this.splitFuel);
  
// };

// JourneysImpactView.prototype.render = function(mainNumber) {

//   this.container = document.querySelector('#render-view')
//   this.container.innerHTML = '';
  
//   const header = document.createElement('h1')
//   header.textContent ='Your impact summary'
//   this.container.appendChild(header);
//   const numberInfo = document.createElement('p');
//   numberInfo.textContent = `Total emissions of your journeys: ${mainNumber} tonnesCO2e`;
//   this.container.appendChild(numberInfo);
// }

// JourneysImpactView.prototype.renderDistance = function(mainNumber) {
//   const numberInfo = document.createElement('p');
//   numberInfo.textContent = `Total distance travelled: ${mainNumber} km`;
//   this.container.appendChild(numberInfo);
// }

// JourneysImpactView.prototype.renderProjections = function(mainNumber) {
//   const projectionInfo = document.createElement('p');
//   projectionInfo.textContent = `Yearly projection of carbon: ${mainNumber} CO2e`;
//   this.container.appendChild(projectionInfo);
// }

// JourneysImpactView.prototype.renderFilter = function(mainNumber) {
//   console.log(mainNumber)
//   const header = document.createElement('p');
//   this.container.appendChild(header);
//   header.textContent="Emissions By Mode of transport"
//   for (var key in mainNumber){
//     if (mainNumber.hasOwnProperty(key)) {
//       const listItem = document.createElement('li');
//       listItem.textContent = `${key}: ${mainNumber[key]}`;
//       this.container.appendChild(listItem);
//     }
//   } 
// }

// JourneysImpactView.prototype.renderFilterFuel = function(mainNumber) {
//   console.log(mainNumber)
//   const header = document.createElement('p');
//   this.container.appendChild(header);
//   header.textContent="Emissions By Fuel"
//   for (var key in mainNumber){
//     if (mainNumber.hasOwnProperty(key)) {
//       const listItem = document.createElement('li');
//       listItem.textContent = `${key}: ${mainNumber[key]}`;
//       this.container.appendChild(listItem);
//     }
//   } 
// }

  // mainNumber.forEach(filter => {
  //   const projectionInfo = document.createElement('p');
  //   projectionInfo.textContent = mainNumber;
  //   this.container.appendChild(projectionInfo);
  // });
  

// }

module.exports = JourneysImpactView;


// PlanetInfoView.prototype.render = function(planet) {
//   const list = document.createElement('ul');
//   for (var key in planet){
//     if (planet.hasOwnProperty(key)) {
//       const listItem = document.createElement('li');
//       listItem.textContent = `${key}: ${planet[key]}`;
//       this.container.innerHTML = '';
//       list.appendChild(listItem);
//     }
//   } 
//   this.container.appendChild(list);
//   const image = document.createElement('img');
//   image.src = planet.image;
//   list.appendChild(image);
// };




