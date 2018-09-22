const PubSub = require('../helpers/pub_sub.js');


const JourneysImpactView = function(){

}

module.exports = JourneysImpactView;
// subscribe to: 'Journeys:all-data-loaded'
JourneysImpactView.prototype.bindEvents = function(){
  PubSub.subscribe('Journeys:carbon-data-loaded')
  PubSub.subscribe('Journeys:carbon-data-by-fuel')
}
// text content, grab, display
