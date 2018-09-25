const PubSub = require('../helpers/pub_sub.js');

const MapView = function(mapContainer){
    this.mapContainer = mapContainer;
    this.coordinates = null;
}

MapView.prototype.bindEvents = function(){
    PubSub.subscribe('Bike:bikes-loaded', (event) => {
        // const allBikes =  event.detail; 
        this.getLocations(event.detail)
        this.renderMap()
})
    PubSub.subscribe('Chargers:data-loaded', (event) => {
        const allChargePoints = event.detail
        console.log(event.detail)
    })
}

MapView.prototype.getLocations = function(allBikes) {
    arrayOfLocations=[]
    console.log(arrayOfLocations)
    allBikes.forEach(bike => {
        arrayOfLocations.push([bike.lat, bike.lon])
    })
    return this.coordinates = arrayOfLocations;
}

MapView.prototype.renderMap = function(){
	var mymap = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
		L.marker([51.529163, -0.10997]).addTo(mymap)
    	.bindPopup("<b>Bike Location1</b><br />LONDON").openPopup();
		L.marker([51.499606, -0.197574]).addTo(mymap)
    	.bindPopup("<b>Second Choice</b><br />LONDON").openPopup();
		L.marker([51.521283, -0.084605]).addTo(mymap)
    	.bindPopup("<b>YOU GOT</b><br />LONDON").openPopup();

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);

}
module.exports = MapView;