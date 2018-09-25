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
  PubSub.subscribe('Journeys:carbon-data-by-vehicle', (event) => {
    this.splitVehicle =  event.detail; 
  })
  PubSub.subscribe('Journeys:carbon-data-by-fuel', (event) => {
    this.splitFuel =  event.detail; 
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
        }]
      });
    
    }

// PIE CHART SPLIT BY FUEL 
ChartView.prototype.renderChart = function(carbonEmissions){
    Highcharts.chart('container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Browser market shares in January, 2018'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Fuel Type',
          colorByPoint: true,
          data: [{
            name: 'Petrol',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Diesel',
            y: 11.84
          }, {
            name: 'Hybrid',
            y: 10.85
          }, {
            name: 'Electric',
            y: 4.67
          }]
        }]
      });
    }



// PIE CHART SPLIT - TO  USE FOR OPTIONAL - YES / NO
ChartView.prototype.renderChart = function(distanceYear, distanceTenYear){
Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Browser<br>shares<br>2017',
      align: 'center',
      verticalAlign: 'middle',
      y: 40
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['Yes', 76],
        ['No', 24],
        {
          name: 'Other',
          y: 7.61,
          dataLabels: {
            enabled: false
          }
        }
      ]
    }]
  });
}  
  





module.exports = ChartView;