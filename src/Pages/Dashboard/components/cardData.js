// Packages
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CardData extends Component {
  render() {
    return (
      <div className="card-data">
        <label className="card-title">17th August 2020</label>
        <div className="card-content first-type-card selected-card">
          <span>Stop & Go</span>
          <span>25</span>
        </div>
        <div className="card-content">
          <span>Priority</span>
          <span>25</span>
        </div>
        <div className="card-content">
          <span>New Service</span>
          <span>25</span>
        </div>
        <div className="card-content">
          <span>Payment Today</span>
          <span>25</span>
        </div>
      </div>
    );
  }
}