const JourneysFormView = require('./journeys_form_view');
const JourneysAllView = require('./journeys_all_view');
const JourneysImpactView = require('./journeys_impact_view');

const CurrentView = function(defaultView, navElement){
    this.defaultView = defaultView;
    this.navElement = navElement;
};

const journeysFormView = new JourneysFormView();
const journeysAllView = new JourneysAllView();
journeysAllView.bindEvents();
const journeysImpactView = new JourneysImpactView();
journeysImpactView.bindEvents();



CurrentView.prototype.bindEvents = function () {
    this.render(1);
    this.navElement.forEach(element => {
        element.addEventListener('click', (event) => {
        console.log(`item clicked: ${event.target.id}`)
        this.render(event.target.id);
    });
  });
};

CurrentView.prototype.render = function(num){
    console.log(`default view is currently: ${this.defaultView}`)
    switch(parseInt(num)){
        case 1:
            journeysFormView.renderFormView();
        break;
        case 2:
            journeysImpactView.renderAll();
        break;
        case 3:
            journeysAllView.renderFormView();
        break;
    }

};





module.exports = CurrentView;