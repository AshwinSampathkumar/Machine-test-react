import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
        series: [44, 55, 41, 17, 15],
        options: {
          labels: ['Washing','Ironing','Tailoring','Tailoring + Ironing', 'Tailoring + Washing'],
          // labels: ['series-1', 'series-2', 'series-3','series-4','series-5',],
          chart: {
            type: 'donut',
          },
          dataLabels:{
            enabled: false,
          },
          plotOptions: {
            pie: {
              donut: {
                size: '45%'
              }
            }
          },
          responsive: [{
            breakpoint: 400,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  render() {
    return (
          <div className="mixed-chart">
            <Chart
            style={{minHeight: '8.125rem'}}
              options={this.state.options}
              series={this.state.series}
              type="donut"
              width="300"
              height="7.9375rem"
            />
          </div>
    );
  }
}

export default App;
