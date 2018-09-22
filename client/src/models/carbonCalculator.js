const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const carbonCalculator = function(){

}


carbonCalculator.prototype.bindEvents = function (){
  PubSub.subscribe('', (evt) => {
    const userJourneyDetials = this.data(evt.detail)
    this.calculateEmissions(userJourneyDetials);
  })
}



module.exports = carbonCalculator;
