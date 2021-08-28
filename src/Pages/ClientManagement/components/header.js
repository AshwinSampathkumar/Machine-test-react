// Packages
import React, { Component } from "react";
import PropTypes from "prop-types";

// components
import { Button, Search } from "../../../Components/index";

// icons
import Add from "../../../assets/icon-png/add.png";
import QR from "../../../assets/icon-png/qr.png";

export default class Header extends Component {
  state = {
    search: "",
  };

  onAddCustomer() {
    // Event handler for adding customer
  }
  onQrScan() {
    // Event handler for QR Scan
  }
  onSearch() {
    // Event handler for search value
  }
  onSearchInput = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <header className="header">
        <div className="header-container">
          <label className="header-title">{this.props.title}</label>
          <div className="right-container">
            <Button
              className="add-customer"
              label={`Add ${
                this.props.title === "Dashboard" ? "Order" : "Customer"
              }`}
              width="12rem"
              height="2.25rem"
              isRounded={true}
              prependIcon={Add}
              style={{
                justifyContent: "flex-start",
                padding: "0 1.25rem",
              }}
              onClick={this.onAddCustomer}
            />
            <Button
              className="add-customer"
              label="QR Code Scan"
              width="12rem"
              height="2.25rem"
              isRounded={true}
              prependIcon={QR}
              onClick={this.onQrScan}
            />
            <Search
              placeholder="Search by Customer Name"
              height="2.25rem"
              value={this.state.search}
              onSearch={this.onSearch}
              onSearchChange={this.onSearchInput}
            />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "",
};
