// Packages
import React, { Component } from "react";
import PropTypes from "prop-types";

// components
import { Button } from "../index";

//css
import "../../styles/components/search.scss";

export default class Search extends Component {
  render() {
    return (
      <div className={`search-container ${this.props.className}`}>
        <input
          className="search-input"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onSearchChange}
        />
        <Button
          label="Search"
          isRounded={true}
          width="7rem"
          height={this.props.height}
          onClick={this.props.onSearch}
        />
      </div>
    );
  }
}

Search.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  height: PropTypes.string,
};

Search.defaultProps = {
  className: "",
  placeholder: "",
  value: "",
  height: "2.5rem",
};
