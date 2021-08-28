// Packages
import React, { Component } from "react";
import { Calendar } from "@natscale/react-calendar";

//css
import "../../styles/components/calender.scss";

export default class Calender extends Component {
  state = { value: "" };

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Calendar
        className="calender-class"
        value={this.state.value}
        onChange={() => this.onChange}
      />
    );
  }
}
