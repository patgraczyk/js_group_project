const PubSub = require('../helpers/pub_sub.js');
const elementHelper = require ('../helpers/element_helper.js');

const JourneysImpactView = function(){
  this.container = null;
}

JourneysImpactView.prototype.renderFormView = function(){
  this.container = document.querySelector('#render-view')

  PubSub.subscribe('Journeys:carbon-data-loaded', (event) => {
   const theNumber =  event.detail; 
   this.render(theNumber);
   console.log(event.detail)
  }) 
  PubSub.subscribe('Journeys:carbon-data-distance', (event) => {
    const theDistance =  event.detail; 
    this.renderDistance(theDistance);
    console.log(event.detail)
   })
  PubSub.subscribe('Journeys:carbon-data-projections', (event) => {
    const projection =  event.detail; 
    this.renderProjections(projection);
    console.log(event.detail)
  })  
  PubSub.subscribe('Journeys:carbon-data-by-vehicle', (event) => {
    const splitVehicle =  event.detail; 
    this.renderFilter(splitVehicle);
    // console.log(event.detail)
  })
  PubSub.subscribe('Journeys:carbon-data-by-fuel', (event) => {
    const splitFuel =  event.detail; 
    this.renderFilterFuel(splitFuel);
    // console.log(event.detail)
  })
}

JourneysImpactView.prototype.render = function(mainNumber) {
  const numberInfo = document.createElement('p');
  numberInfo.textContent = `The overall emissions of your journey ${mainNumber} tonnesCO2e`;
  this.container.appendChild(numberInfo);
}

JourneysImpactView.prototype.renderDistance = function(mainNumber) {
  const numberInfo = document.createElement('p');
  numberInfo.textContent = `Your overall travel ${mainNumber} km`;
  this.container.appendChild(numberInfo);
}

JourneysImpactView.prototype.renderProjections = function(mainNumber) {
  const projectionInfo = document.createElement('p');
  projectionInfo.textContent = `Yearly projection of carbon: ${mainNumber} CO2e`;
  this.container.appendChild(projectionInfo);
}

JourneysImpactView.prototype.renderFilter = function(mainNumber) {
  console.log(mainNumber)
  const header = document.createElement('p');
  this.container.appendChild(header);
  header.textContent="Emissions By Mode of transport"
  for (var key in mainNumber){
    if (mainNumber.hasOwnProperty(key)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${mainNumber[key]}`;
      this.container.appendChild(listItem);
    }
  } 
}

JourneysImpactView.prototype.renderFilterFuel = function(mainNumber) {
  console.log(mainNumber)
  const header = document.createElement('p');
  this.container.appendChild(header);
  header.textContent="Emissions By Fuel"
  for (var key in mainNumber){
    if (mainNumber.hasOwnProperty(key)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${mainNumber[key]}`;
      this.container.appendChild(listItem);
    }
  } 
}

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




