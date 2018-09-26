const JourneysFormView = require('./journeys_form_view');
const JourneysAllView = require('./journeys_all_view');
const JourneysImpactView = require('./journeys_impact_view');
const MapView = require('./map_view');

const CurrentView = function(defaultView, navElement){
    this.defaultView = defaultView;
    this.navElement = navElement;
};

const journeysFormView = new JourneysFormView();
const journeysAllView = new JourneysAllView();
journeysAllView.bindEvents();
const journeysImpactView = new JourneysImpactView();
journeysImpactView.bindEvents();

// const mapContainer = document.querySelector('#mapid');
const mapView = new MapView();
mapView.bindEvents();


// const mapView = new MapView();
// mapView.bindEvents();



CurrentView.prototype.bindEvents = function () {
    this.render('nav_add_journey');
    this.navElement.forEach(element => {
        element.addEventListener('click', (event) => {
        console.log(`item clicked: ${event.target.id}`)
        this.render(event.target.id);
    });
  });
};

CurrentView.prototype.render = function(view){
    console.log(`default view is currently: ${this.defaultView}`)
    switch(view){
        case 'nav_add_journey':
            journeysFormView.renderFormView();
        break;
        case 'nav_co2_impact':
            journeysImpactView.renderAll();
        break;
        case 'nav_all_journeys':
            journeysAllView.renderFormView();
        break;
        case 'nav_maps':
            mapView.renderMap();
        break;
    }

};





module.exports = CurrentView;