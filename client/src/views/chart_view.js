const PubSub = require('../helpers/pub_sub.js');

const ChartView = function(){
  this.container = null;
  this.summaryContainer = null;
  this.totalEmissions = null;
  this.totalDistance = null;
  this.projectionYear = null;
  this.projectionTenYear = null;
  this.distanceYear = null;
  this.distanceTenYear = null;
  this.splitVehicle = null;
  this.splitFuel = null;
}

ChartView.prototype.bindEvents = function(){
  PubSub.subscribe('Journeys:carbon-data-loaded', (event) => {
    this.totalEmissions =  event.detail; 
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
  PubSub.subscribe('Journeys:carbon-data-distance', (event) => {
    this.totalDistance = event.detail;
  })
}

ChartView.prototype.renderAllCharts = function(){
  this.container = document.createElement('div');
  this.container.id = 'all_charts_container';
  const renderView = document.querySelector('#render-view');
  renderView.innerHTML = '';
  renderView.appendChild(this.container);


  this.renderEmissionsChart(this.totalEmissions); 
  this.renderDistanceChart(this.totalDistance);
  this.renderProjectionsChart(this.projectionYear, this.projectionTenYear);
  this.renderProjectionsDistance(this.distanceYear, this.distanceTenYear);
  this.renderFuelPieChart();
  this.renderVehicleTypeChart();
  this.renderOptionalChart();

  this.renderSummary();
  this.renderEmissionsByVehicle(this.splitVehicle);
  this.renderFilterFuel(this.splitFuel);

};

ChartView.prototype.renderSummary = function(){
  this.summaryContainer = document.createElement('div');
  this.summaryContainer.id = 'render_summary_container';
  const summaryHeader = document.createElement('h4');
  this.summaryContainer.appendChild(summaryHeader);
  summaryHeader.textContent="Emissions summary"
  const paragraph = document.createElement('p');
  paragraph.id = 'summary_paragraph';
  paragraph.innerHTML = `Overall emissions are: ${this.totalEmissions} <br/ >
  Total distance is: ${this.totalDistance}<br/ >`
  this.summaryContainer.appendChild(paragraph);
  this.container.appendChild(this.summaryContainer);
};

ChartView.prototype.renderEmissionsByVehicle = function(mainNumber) {
  console.log(mainNumber)
  const header = document.createElement('h4');
  this.summaryContainer.appendChild(header);
  header.textContent="Emissions by mode of transport"
  for (var key in mainNumber){
    if (mainNumber.hasOwnProperty(key)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${mainNumber[key]}`;
      this.summaryContainer.appendChild(listItem);
    }
  } 
}

ChartView.prototype.renderFilterFuel = function(mainNumber) {
  console.log(mainNumber)
  const header = document.createElement('h4');
  this.summaryContainer.appendChild(header);
  header.textContent="Emissions by fuel type"
  for (var key in mainNumber){
    if (mainNumber.hasOwnProperty(key)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${mainNumber[key]}`;
      this.summaryContainer.appendChild(listItem);
    }
  } 
}



// MAIN NUMBER CHART
ChartView.prototype.renderEmissionsChart = function(totalEmissions){
  const renderEmissionsChart = document.createElement('div');
  renderEmissionsChart.id = "render_emissions_chart";
  this.container.appendChild(renderEmissionsChart);

    Highcharts.chart(renderEmissionsChart, {
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
            data: [totalEmissions]
        }]
    });
};


ChartView.prototype.renderDistanceChart = function(totalDistance){
  const renderDistanceChart = document.createElement('div');
  renderDistanceChart.id = "render_distance_chart";
  this.container.appendChild(renderDistanceChart);

    Highcharts.chart(renderDistanceChart, {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Overall Distance'
        },
        xAxis: {
            categories: ['Overall Distance']
        },
        yAxis: {
            title: {
                text: 'km'
            }
        },
        series: [{
            name: 'All distance',
            data: [totalDistance]
        }]
    });
};



// PROJECTIONS CHART EMISSIONS
ChartView.prototype.renderProjectionsChart = function(projectionYear, projectionTenYear){
  const renderProjectionsChart = document.createElement('div');
  renderProjectionsChart.id = "render_projections_chart";
  this.container.appendChild(renderProjectionsChart);
  Highcharts.chart(renderProjectionsChart, {
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
        categories: ['Projections'],
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
ChartView.prototype.renderProjectionsDistance = function(distanceYear, distanceTenYear){
  const renderProjectionsDistance = document.createElement('div');
  renderProjectionsDistance.id = "render_projections_distance";
  this.container.appendChild(renderProjectionsDistance);
    Highcharts.chart(renderProjectionsDistance, {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Distance Projections'
        },
        subtitle: {
          text: 'See how your distance projections will look over 1 and 10 years'
        },
        xAxis: {
          categories: ['Projections'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'km',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: 'km'
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
ChartView.prototype.renderFuelPieChart = function(){
  const renderFuelPieChart = document.createElement('div');
  renderFuelPieChart.id = "render_fuel_pie_chart";
  this.container.appendChild(renderFuelPieChart);
    Highcharts.chart(renderFuelPieChart, {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Emissions by fuel type'
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


// PIE CHART SPLIT - vehicle type
ChartView.prototype.renderVehicleTypeChart = function(){
  const renderVehicleTypeChart = document.createElement('div');
  renderVehicleTypeChart.id = "render_vehicle_type_chart";
  this.container.appendChild(renderVehicleTypeChart);
    Highcharts.chart(renderVehicleTypeChart, {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Emissions by vehicle type'
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
          name: 'Vehicle Type',
          colorByPoint: true,
          data: [{
            name: 'Car',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Train',
            y: 11.84
          }, {
            name: 'Airplane',
            y: 10.85
          }, {
            name: 'Motorbike',
            y: 4.67
          }]
        }]
      });
}

// GUAGE CHART - optional journeys
ChartView.prototype.renderOptionalChart = function(){
  const renderOptionalChart = document.createElement('div');
  renderOptionalChart.id = "render_optional_chart";
  this.container.appendChild(renderOptionalChart);
  
  Highcharts.chart(renderOptionalChart, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Optional trips 2017',
        // align: 'center',
        // verticalAlign: 'top',
        // y: 40
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
            size: '120%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Optional Data',
        innerSize: '50%',
        data: [
            ['Yes', 70],
            {
                name: 'No',
                y: 30,
                dataLabels: {
                    enabled: true
                }
            }
        ]
    }]
  });
}

module.exports = ChartView;