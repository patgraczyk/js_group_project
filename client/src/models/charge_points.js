const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const ChargePoints = function(){
   this.request = new Request('https://api.tfl.gov.uk/Place/Type/ChargeStation,ChargeConnector');
   this.chargePoints = null;
   this.chargers = null;
   }


     ChargePoints.prototype.getData = function () {
       this.request.get()
         .then((data) => {
           this.chargers = data;
           PubSub.publish('Chargers:data-loaded', this.chargers);
           console.log(this.chargers)
         })
         .catch(console.error);
   };





module.exports = ChargePoints;