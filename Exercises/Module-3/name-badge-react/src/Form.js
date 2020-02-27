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
      aboutMe: "",
      addedContacts: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitBadge = e => {
    e.preventDefault();
    console.log("hi");
    this.setState(prevState => {
      const {
        firstName,
        lastName,
        email,
        dateOfBirth,
        phone,
        food,
        aboutMe,
        addedContacts
      } = prevState;

      return {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        phone: "",
        food: "",
        aboutMe: "",
        addedContacts: [
          ...addedContacts,
          { firstName, lastName, email, dateOfBirth, phone, food, aboutMe }
        ]
      };
    });
  };

  render() {
    return (
      <div className="mainDiv">
        <form className="infoForm">
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />

          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            value={this.state.email}
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="date"
            value={this.state.dateOfBirth}
            name="dateOfBirth"
            placeholder="Date of Birth"
            onChange={this.handleChange}
          />
          <input
            type="number"
            value={this.state.phone}
            name="phone"
            placeholder="Phone"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.food}
            name="food"
            placeholder="Favorite Food"
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            value={this.state.aboutMe}
            name="aboutMe"
            placeholder="About Me"
            onChange={this.handleChange}
          />
          <button onClick={this.submitBadge}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
