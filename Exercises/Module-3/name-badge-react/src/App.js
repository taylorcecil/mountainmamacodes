import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phone: "",
      favoriteFood: "",
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
      favoriteFood,
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
          <button onClick={this.submitBadge}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;