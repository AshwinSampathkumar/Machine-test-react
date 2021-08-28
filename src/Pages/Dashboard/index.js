// Packages
import React, { Component } from "react";

// components
import { Header } from "../ClientManagement/components";
import { CardData } from "./components";
import { BarChart, DonutChart, Select, Calender } from "../../Components";

// icons
import Moneybag from "../../assets/icon-png/money-bag.png";
import Wash from "../../assets/icon-png/washing-machine.png";
import Layout from "../../Layout/index";

export default class Dashboard extends Component {
  state = {
    dropdownDataSet: [
      { name: "Today", value: "today" },
      { name: "Yesterday", value: "yesterday" },
      { name: "Current Week", value: "currentWeek" },
      { name: "Last Week", value: "lastWeek" },
      { name: "Current Month", value: "currentMonth" },
      { name: "Last Month", value: "lastMonth" },
    ],
    selectedOne: { name: "Last Week", value: "lastWeek" },
    selectedTwo: { name: "Last Week", value: "lastWeek" },
    selectedThree: { name: "Last Week", value: "lastWeek" },
  };

  handleClick = () => {
    this.props.history.push("/client-management");
  };

  getSelectedValueOne = (value) => {
    this.setState({ selectedOne: value });
  };
  getSelectedValueTwo = (value) => {
    this.setState({ selectedTwo: value });
  };
  getSelectedValueThree = (value) => {
    this.setState({ selectedThree: value });
  };

  render() {
    return (
      <Layout>
        <div className="dashboard">
          <Header title="Dashboard" />
          <section className="dashboard-content">
            <div className="collection" onClick={() => this.handleClick()}>
              <img className="image" src={Moneybag} alt="money-bag" />
              <div className="desc-content">
                <label className="collection-title">$6.70</label>
                <small className="desc">Due For Collection</small>
              </div>
            </div>
            <div className="pending">
              <img className="image" src={Wash} alt="wash" />
              <div className="desc-content">
                <label className="pending-title">300</label>
                <small className="desc">Today Pending</small>
              </div>
            </div>
            <div className="revenue">
              <div className="head-content">
                <label className="revenue-title">Revenue Generated</label>
                <Select
                  value={this.state.selectedThree.name}
                  width="8rem"
                  dataSet={this.state.dropdownDataSet}
                  itemName="name"
                  itemValue="value"
                  onSelect={this.getSelectedValueThree}
                />
              </div>
              <BarChart />
            </div>
            <div className="date">
              <section className="left-container">
                <Calender />
              </section>
              <section className="right-container">
                <CardData />
              </section>
            </div>
            <div className="chart-one">
              <div className="head-content">
                <label className="revenue-title">Workload Distribution</label>
                <Select
                  value={this.state.selectedOne.name}
                  width="8rem"
                  dataSet={this.state.dropdownDataSet}
                  itemName="name"
                  itemValue="value"
                  onSelect={this.getSelectedValueOne}
                />
              </div>
              <DonutChart />
            </div>
            <div className="chart-two">
              <div className="head-content">
                <label className="revenue-title">Revenue Trend</label>
                <Select
                  value={this.state.selectedTwo.name}
                  width="8rem"
                  dataSet={this.state.dropdownDataSet}
                  itemName="name"
                  itemValue="value"
                  onSelect={this.getSelectedValueTwo}
                />
              </div>
              <DonutChart />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
