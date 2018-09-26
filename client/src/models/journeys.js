const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Journeys = function(distance, vehicle, fuel){
this.request = new Request('http://localhost:3000/api/journeys')
this.journeys = [];
this.categories = [];
this.distance = distance;
this.vehicle = vehicle;
this.fuel = fuel;
// this.useType = useType;
}

Journeys.prototype.bindEvents = function () {
  PubSub.subscribe('Form-view:journey-submitted', (event) => {
    this.postJourney(event.detail);
    console.log(`journeys received post event: ${event.detail}`)
  
  });

  PubSub.subscribe('JourneysAllView:journey-delete-clicked', (event) => {
    this.deleteJourney(event.detail);
    console.log(`Journeys received delete event: ${event.detail}`);
  });

};

Journeys.prototype.getData = function () {
    this.request.get()
      .then((journeys) => {
        PubSub.publish('Journeys:data-loaded', journeys);
        console.log(`Journeys published all data: ${journeys}`)
      })
      .catch(console.error);
};

// ** GARY this is a simple GET request, this will be to extract categories, edit as you wish, uncomment when you want

// Journeys.prototype.all = function() {
//   this.request
//     .get()
//     .then((categoriesList) => {
//       this.categories = categoriesList;
//       PubSub.publish('Form-view:all-data-loaded', this.categories);
//     })
//     .catch((err) => console.error(err));
// };

Journeys.prototype.postJourney = function (newJourney) {
    this.request.post(newJourney)
      .then((journeys) => {
        PubSub.publish('Journeys:data-loaded', journeys);
      })
      .catch(console.error);
};

//  *GARY thisis a simple UPDATE request, edit as you wish
// Journeys.prototype.update = function(editedJourney) {
//   const id = editedJourney._id;
//   this.request
//     .put(editedJourney, id)
//     .then((allJourneys) => {
//       this.journeys = allJourneys;
//       PubSub.publish('Journeys:all-data-loaded', this.journeys);
//     })
//     .catch((err) => console.error(err));
// };
//

Journeys.prototype.deleteJourney = function(itemToDelete) {
  const id = itemToDelete;
  this.request
    .delete(id)
    .then((allJourneys) => {
      this.journeys = allJourneys;
      PubSub.publish('Journeys:data-loaded', this.journeys);
    })
    .catch((err) => console.error(err));
};


module.exports = Journeys;


// publish to 'Form-view:all-data-loaded'
// subscribe to 'Form-view:journey-submitted'
//  request GET
//  request POST
// publish to 'Journeys:all-data-loaded'
