// Packages
import React, { Component } from "react";
import PropTypes from "prop-types";

// components
import { Paginate, Button } from "../index";

// icons
import Edit from "../../assets/icon-png/edit.png";
import Eye from "../../assets/icon-png/eye.png";
import Download from "../../assets/icon-png/download.png";

// css
import "../../styles/components/table.scss";

export default class Table extends Component {
  cellRender(cellValue, headerValue) {
    switch (headerValue) {
      case "fullName":
        return (
          <td key={headerValue}>
            <div className="user-name">
              <img className="avatar-img" src={cellValue.avatar} alt="avatar" />
              <label className="name-label">{cellValue.fullName}</label>
            </div>
          </td>
        );
      case "paymentStatus":
        return (
          <td key={headerValue}>
            <div className="user-name">
              <label className="name-label dollar-value">
                ${cellValue.paymentAmount}
              </label>
              {cellValue.paymentType ? (
                <button className="payment-type-btn">
                  {cellValue.paymentType}
                </button>
              ) : (
                ""
              )}
            </div>
          </td>
        );
      case "actions":
        return (
          <td key={headerValue}>
            <div className="user-name justify-center">
              <button className="action-btn edit">
                <img src={Edit} alt="edit" />
              </button>
              <button className="action-btn view">
                <img src={Eye} alt="view" />
              </button>
            </div>
          </td>
        );
      default:
        return <td className="name-label">{cellValue[headerValue]}</td>;
    }
  }
  onDownload() {
    // Event handler for downloading invoices
  }
  render() {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {this.props.header.map((item) => {
                return <th key={item.value}>{item.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.dataSet.map((item, i) => {
              return (
                <tr key={i}>
                  {this.props.header.map((headerItem) => {
                    return this.cellRender(item, headerItem.value);
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="table-footer">
          <Paginate dataSet={this.props.dataSet} />
          <Button
            className="download-btn"
            label="Download Invoices"
            width="10rem"
            height="1.5rem"
            fontSize="0.8rem"
            prependIcon={Download}
            onClick={this.onDownload}
          />
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  dataSet: PropTypes.array,
  header: PropTypes.array,
};

Table.defaultProps = {
  dataSet: [],
  header: [],
};
