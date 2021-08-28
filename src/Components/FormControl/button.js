// Packages
import React, { Component } from "react";
import PropTypes from "prop-types";

//css
import "../../styles/components/button.scss";

export default class Button extends Component {
  render() {
    return (
      <button
        className={`btn btn-${this.props.type} ${
          this.props.isRounded ? "rounded" : ""
        } ${this.props.className}`}
        style={{
          fontSize: this.props.fontSize,
          width: this.props.width,
          height: this.props.height,
          ...this.props.style,
        }}
        onClick={() => this.props.onClick()}
      >
        {this.props.prependIcon ? (
          <span>
            <img src={this.props.prependIcon} alt="prepend-icon" />
          </span>
        ) : (
          ""
        )}
        <span style={this.props.labelStyle}>{this.props.label}</span>
        {this.props.appendIcon ? (
          <span>
            <img src={this.props.appendIcon} alt="append-icon" />
          </span>
        ) : (
          ""
        )}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  rounded: PropTypes.bool,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  prependIcon: PropTypes.any,
  appendIcon: PropTypes.any,
};

Button.defaultProps = {
  className: "",
  label: "",
  type: "primary",
  isRounded: false,
  fontSize: "1rem",
  width: "100%",
  height: "3rem",
  prependIcon: "",
  appendIcon: "",
};
