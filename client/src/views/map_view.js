const PubSub = require('../helpers/pub_sub.js');
const elementHelper = require ('../helpers/element_helper.js');

const MapView = function(){
    this.allBikes = null;
    this.allChargePoints =null;
    this.coordinatesCharge = null;
    this.arrayOfBikeLocations = null;
}

MapView.prototype.bindEvents = function(){
    PubSub.subscribe('Bike:bikes-loaded', (event) => {
        this.allBikes = event.detail;
        console.log(event.detail)
    })

    // PubSub.subscribe('Chargers:data-loaded', (event) => {
    //     const allChargePoints = event.detail
    //     console.log(event.detail)
    // })
}

// FUNCTION TO GET ALL COORDINATES FOR BIKES AND CHARGE POINTS 
// MapView.prototype.getLocations = function(allBikes) {
//     arrayOfBikeLocations=[]
//     allBikes.forEach(bike => {
//         arrayOfBikeLocations.push([bike.lat, bike.lon])
//     })
//     return this.arrayOfBikeLocations;
// }

// MapView.prototype.getLocations = function(allChargePoints) {
//     arrayOfChargeLocations=[]
//     console.log(arrayOfChargeLocations)
//     allChargePoints.forEach(chargePoint => {
//         arrayOfChargeLocations.push([chargePoint.lat, chargePoint.lon])
//     })
//     return this.arrayOfChargeLocations;
// }



MapView.prototype.renderMap = function(){
    const renderElement = document.querySelector('#render-view')
    renderElement.innerHTML = '';
    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    const mapHeader = elementHelper('h1',{
        'id': 'mapHeader'
    });
    mapHeader.textContent = 'Bike and Vehicle Charge Points'
    renderElement.appendChild(mapHeader);
    renderElement.appendChild(mapContainer);
    // const arrayOfBikeLocations = this.getLocations(allBikes);

    // const allLocations = this.getLocations(this.allBikes)
	var mymap = L.map(mapContainer).setView([51.505, -0.09], 13);

    L.tileLayer
    ('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
    })
    .addTo(mymap);
    markers = [{
        "lat": 51.521283,
        "lon": -0.084605  
    },
    { "lat": 51.499606,
      "lon": -0.197574 
    }];

    for (var i=0; i < markers.lenght; ++i); {
        L.marker([markers[i].lat, markers[i].lon]).addTo(mymap)
    	.bindPopup("<b>Bike location</b><br>").openPopup();
	// var popup = L.popup();
    }
}
module.exports = MapView;