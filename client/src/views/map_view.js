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
    this.bindEvents()
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
    const arrayOfBikes = this.allBikes;
    console.log(this.allBikes)
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

    L.marker([51.541596, -0.125441]).addTo(mymap),
    L.marker([51.516525, -0.144647]).addTo(mymap),
    L.marker([51.37439, -0.304065]).addTo(mymap),
    L.marker([51.37439, -0.304065]).addTo(mymap),
    L.marker([51.37439, -0.304065]).addTo(mymap),
    L.marker([51.512344, -0.129508]).addTo(mymap),
    L.marker([51.512344, -0.129508]).addTo(mymap),
    L.marker([51.51236, -0.129549]).addTo(mymap),
    L.marker([51.490597, -0.207703]).addTo(mymap),
    L.marker([51.506207, -0.102003]).addTo(mymap),
    L.marker([51.497208, -0.089822]).addTo(mymap),
    L.marker([51.504707, -0.093855]).addTo(mymap)
}

    // markers = [
    //     {
    //     "lat": 51.541596,
    //     "lon": -0.125441,
    //     "commonName": "York Way, Kings Cross"
    //     },
    //     {
    //     "lat": 51.516525,
    //     "lon": -0.144647,
    //      "commonName": "Q-Park, Oxford Street, Cavendish Square Station"
    //     }
    // ]

    // for (var i=0; i < 2; i++); {
    //     L.marker([markers[i].lat, markers[i].lon]).addTo(mymap)
    	
	// var popup = L.popup();
    // }


    // for (var i = 0; i < 700; i++) {
    //     marker = new L.marker([markers[i][8],markers[i][9]])
    //         .bindPopup(markers[i][0])
    //         .addTo(map);
    // }
 


module.exports = MapView;