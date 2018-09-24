const PubSub = require('../helpers/pub_sub.js');

const ChartView = function(container){
    this.container = container;
}


ChartView.prototype.bindEvents = function(){
    PubSub.subscribe('Journeys:carbon-data-loaded', (event) => {
        const theNumber =  event.detail; 
        this.renderChart(event.detail)
})
}


ChartView.prototype.renderChart = function(carbonEmissions){
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Overall Emissions'
        },
        xAxis: {
            categories: ['Overall Emissions']
        },
        yAxis: {
            title: {
                text: 'Emissions'
            }
        },
        series: [{
            name: 'All emissions',
            data: [carbonEmissions]
        }]
    });
};

module.exports = ChartView;