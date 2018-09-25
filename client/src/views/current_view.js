const JourneysFormView = require('./journeys_form_view');
const JourneysAllView = require('./journeys_all_view');
const JourneysImpactView = require('./journeys_impact_view');

const CurrentView = function(defaultView, navElement){
    this.defaultView = defaultView;
    this.navElement = navElement;
};

const journeysFormView = new JourneysFormView();
const journeysAllView = new JourneysAllView();
const journeysImpactView = new JourneysImpactView();


CurrentView.prototype.bindEvents = function () {
  this.navElement.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log(`item clicked: ${event.target.id}`)
        this.defaultView = event.target.id;
    });

  });
  console.log(`default view is currently: ${this.defaultView}`)
  this.render();
};

CurrentView.prototype.render = function(){
    console.log(`default view is currently: ${this.defaultView}`)
    switch(this.defaultView){
        case 1:
            journeysFormView.renderFormView();
        break;
        case 2:
            journeysAllView.renderFormView();
        break;
        case 3:
            journeysImpactView.renderFormView();
        break;
    }

};





module.exports = CurrentView;