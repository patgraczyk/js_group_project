const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Journeys = function(){
this.request = new Request('/api/journeys');
this.journeys = [];
this.categories = [];

}

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


// ** GARY this is a simple POST request, to POST a new journey; edit as you wish, uncomment when needed;
// Journeys.prototype.add = function(newJourney) {
//   this.request
//     .post(newJourney)
//     .then((allJourneys) => {
//       this.journeys = allJourneys;
//       PubSub.publish('Journeys:all-data-loaded', this.journeys);
//     })
//     .catch((err) => console.error(err));
// };

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
// This is a simple delete request, edit as you wish
// BucketList.prototype.delete = function(itemToDelete) {
//   const id = itemToDelete._id;
//   this.request
//     .delete(id)
//     .then((allJourneys) => {
//       this.journeys = allJourneys;
//       PubSub.publish('Journeys:all-data-loaded', this.journeys);
//     })
//     .catch((err) => console.error(err));
// };


module.exports = Journeys;


// publish to 'Form-view:all-data-loaded'
// subscribe to 'Form-view:journey-submitted'
//  request GET
//  request POST
// publish to 'Journeys:all-data-loaded'
