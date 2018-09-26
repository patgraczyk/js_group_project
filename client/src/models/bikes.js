const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Bikes = function(){
this.bikes = null;
this.request = new Request('https://api.tfl.gov.uk/bikepoint');

}

// Bikes.prototype.getData = function() {
//     // const request = new Request('https://api.tfl.gov.uk/bikepoint');
//     this.request.get() 
//     .then((data)=> {
//       this.bikes = data;
//       PubSub.publish('Bike:bikes-loaded', this.bikes);
//       console.log(this.bikes)
//     })
//   }

//   Bikes.prototype.getData = function() {
//     const request = new Request('https://api.tfl.gov.uk/bikepoint');
//     request.get((data) => {
//       this.bikes = data;
//       console.log(data)
//       PubSub.publish('Bike:bikes-loaded', this.bikes);
//       console.log(this.bikes)
//     })
//   }


//   const ChargePoints = function(){
//     this.request = new Request('https://api.tfl.gov.uk/Place/Type/ChargeStation,ChargeConnector');
//     this.chargePoints = null;
//     this.chargePointsData = null;
//     this.chargers = [];
//     
 
 
//       ChargePoints.prototype.getData = function () {
//         this.request.get()
//           .then((chargers) => {
//             PubSub.publish('Chargers:data-loaded', this.chargers);
//             console.log(chargers)
//           })
//           .catch(console.error);
//     };


module.exports = Bikes;