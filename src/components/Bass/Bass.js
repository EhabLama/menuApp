import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./Bass.css";

export default class Variables extends Component {
  render() {
    return <div className="bass" onClick={this.props.reset} />;
  }
}
