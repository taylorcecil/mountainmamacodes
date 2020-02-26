import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phone: "",
      food: "",
      aboutMe: ""
    };
  }

  submitBadge = e => {
    e.preventDefault();
    console.log("hi");

    const {
      firstName,
      lastName,
      email,
      dateOfBirth,
      phone,
      food,
      aboutMe
    } = this.state;

    this.setState({});
  };

  handleChange = e => {};

  render() {
    return (
      <div className="mainDiv">
        <form className="infoForm">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onClick={this.handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onClick={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onClick={this.handleChange}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            onClick={this.handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            onClick={this.handleChange}
          />
          <input
            type="text"
            name="food"
            placeholder="Favorite Food"
            onClick={this.handleChange}
          />
          <textarea
            type="text"
            name="aboutMe"
            placeholder="About Me"
            onClick={this.handleChange}
          />
          <button onClick={this.submitBadge}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
