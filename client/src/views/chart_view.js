const PubSub = require('../helpers/pub_sub.js');

const ChartView = function(){
    this.container = null;
    // this.containertwo = containertwo;
}



ChartView.prototype.bindEvents = function(){
    PubSub.subscribe('Journeys:carbon-data-loaded', (event) => {
    const theNumber =  event.detail; 
    this.renderChart(event.detail)
    this.renderChartTwo()
})
    PubSub.subscribe('Journeys:carbon-data-projections', (event) => {
    this.projectionYear =  event.detail; 
  }) 
    PubSub.subscribe('Journeys:carbon-data-projectionsTen', (event) => {
    this.projectionTenYear =  event.detail; 
  }) 
  PubSub.subscribe('Journeys:distance-data-projections', (event) => {
    this.distanceYear =  event.detail; 
  }) 
    PubSub.subscribe('Journeys:distance-data-projectionsTen', (event) => {
    this.distanceTenYear =  event.detail; 
  }) 
}



// MAIN NUMBER CHART
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

// PROJECTIONS CHART EMISSIONS
ChartView.prototype.renderChart = function(projectionYear, projectionTenYear){
Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Emissions Projections'
    },
    subtitle: {
      text: 'See how your emissions will look over 1 and 10 years'
    },
    xAxis: {
      categories: ['1 year ', '10 years'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Tonnes CO2e',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' tonnes CO2e'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'One year',
      data: [projectionYear]
    }, {
      name: 'Ten years',
      data: [projectionTenYear]
    },]
  });

}


// PROJECTIONS CHART DISTANCE
ChartView.prototype.renderChart = function(distanceYear, distanceTenYear){
    Highcharts.chart('container', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Emissions Projections'
        },
        subtitle: {
          text: 'See how your emissions will look over 1 and 10 years'
        },
        xAxis: {
          categories: ['1 year ', '10 years'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Tonnes CO2e',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' tonnes CO2e'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'One year',
          data: [distanceYear]
        }, {
          name: 'Ten years',
          data: [distanceTenYear]
        },]
      });
    
    }



// PIE CHART SPLIT 


module.exports = ChartView;