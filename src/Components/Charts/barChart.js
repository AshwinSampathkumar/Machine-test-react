import React, { Component } from "react";
import Chart from "react-apexcharts";
import "../../styles/components/barchart.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [240, 480, 730, 270, 520, 460, 260],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        colors: [
          "#CED5E1",
          "#CED5E1",
          "#27AAE1",
          "#CED5E1",
          "#CED5E1",
          "#CED5E1",
          "#CED5E1",
        ],
        plotOptions: {
          bar: {
            columnWidth: "40%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: ["M", "T", "W", "T", "F", "S", "S"],
          labels: {
            style: {
              colors: [
                "#CED5E1",
                "#CED5E1",
                "#27AAE1",
                "#CED5E1",
                "#CED5E1",
                "#CED5E1",
                "#CED5E1",
              ],
              fontSize: "0.75rem",
            },
          },
        },
      },
    };
  }

  render() {
    return (
          <div className="mixed-chart">
            <Chart
              className="bar-chart"
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="300"
            />
          </div>
    );
  }
}

export default App;
