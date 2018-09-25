const PubSub = require('../helpers/pub_sub.js');

const ChartView = function(container, containertwo){
    this.container = container;
    this.containertwo = containertwo;
}


ChartView.prototype.bindEvents = function(){
    PubSub.subscribe('Journeys:carbon-data-loaded', (event) => {
        const theNumber =  event.detail; 
        this.renderChart(event.detail)
        this.renderChartTwo()
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


ChartView.prototype.renderChartTwo = function(){
    Highcharts.chart('containertwo', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Overall Test'
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
            data: [2]
        }]
    });
};




module.exports = ChartView;