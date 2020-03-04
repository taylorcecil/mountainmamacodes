import React, { Component } from "react";
import Form from "./Form";

export default class Badge extends Component {
  constructor() {
    super();
  }
  render() {
    const { props } = Form;
    return (
      <div className="badge">
        <h3> Connection </h3>
        <br />
        <hr /> <br />
        <p>
          Name:
          <br />
          {props.firstName}
        </p>
        <br />
      </div>
    );
  }
}
