import React, { Component } from "react";
import Badge from "./Badge";

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
          ...prevState.addedContacts,
          { firstName, lastName, email, dateOfBirth, phone, food, aboutMe }
        ]
      };
    });
  };

  render() {
    return (
      <>
        <div className="mainDiv">
          <form className="infoForm" onSubmit={this.submitBadge}>
            <input
              type="text"
              value={this.state.firstName}
              name="firstName"
              minlength="3"
              placeholder="First Name"
              onChange={this.handleChange}
            />

            <input
              type="text"
              value={this.state.lastName}
              name="lastName"
              minlength="3"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            <input
              type="email"
              value={this.state.email}
              name="email"
              minlength="3"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              type="date"
              value={this.state.dateOfBirth}
              name="dateOfBirth"
              minlength="3"
              placeholder="Date of Birth"
              onChange={this.handleChange}
            />
            <input
              type="number"
              value={this.state.phone}
              name="phone"
              minlength="3"
              placeholder="Phone"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={this.state.food}
              name="food"
              minlength="3"
              placeholder="Favorite Food"
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              value={this.state.aboutMe}
              name="aboutMe"
              minlength="3"
              placeholder="About Me"
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
        {this.state.addedContacts.length > 0 ? <Badge /> : ""}
      </>
    );
  }
}

export default Form;
