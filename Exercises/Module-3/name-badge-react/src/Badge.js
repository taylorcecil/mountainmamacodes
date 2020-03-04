import React, { Component } from "react";
import Form from "./Form";

export default class Badge extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="badge">
        <h1> Name Badge: </h1>
        <p>
          Name:
          <br />
          {this.props.firstName}
        </p>
        <br />
      </div>
    );
  }
}
