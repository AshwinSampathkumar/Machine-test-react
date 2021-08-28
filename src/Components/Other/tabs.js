// Packages
import React, { Component } from "react";
import "../../styles/components/tabs.scss";

// components
import { Select } from "../index";

export default class Tabs extends Component {
  state = {
    dropdownData: [
      {
        name: "A-Z Alphabets",
        value: "A-Z Alphabets",
      },
      {
        name: "Z-A Alphabets",
        value: "Z-A Alphabets",
      },
    ],
    selected: {
      name: "A-Z Alphabets",
      value: "A-Z Alphabets",
    },
  };

  getSelectedValue = (value) => {
    this.setState({ selected: value });
  };

  render() {
    return (
      <div className="tabs-container">
        <div className="tabs-head">
          {this.props.dataSet.map((item, i) => {
            return (
              <button
                className={`tab ${
                  this.props.value === item.value ? "selected-tab" : ""
                }`}
                key={i}
                onClick={() => this.props.onTabChange(item)}
              >
                {item.name}
              </button>
            );
          })}
          <div className="tab filter-by">
            <label className="filter-label">Filter By</label>
            <Select
              value={this.state.selected.value}
              width="8rem"
              dataSet={this.state.dropdownData}
              itemName="name"
              itemValue="value"
              onSelect={this.getSelectedValue}
            />
          </div>
        </div>
        <div className="tabs-content">{this.props.children}</div>
      </div>
    );
  }
}
