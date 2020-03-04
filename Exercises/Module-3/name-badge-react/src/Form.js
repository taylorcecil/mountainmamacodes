import React, { Component } from "react";
import Badge from "./Badge";
import hands from "./hands.png";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      phone: "",
      jobTitle: "",
      notes: "",
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
        jobTitle,
        notes,
        addedContacts
      } = prevState;

      return {
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        phone: "",
        jobTitle: "",
        notes: "",
        addedContacts: [
          ...prevState.addedContacts,
          { firstName, lastName, email, dateOfBirth, phone, jobTitle, notes }
        ]
      };
    });
  };

  render() {
    return (
      <>
        <div className="mainDiv">
          <form className="infoForm" onSubmit={this.submitBadge}>
            <h3 className="newConnection">New Connection</h3>
            <br />
            <hr />
            <br />
            <img src={hands} className="hands"></img>
            <br />
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
            <br />
            <input
              type="date"
              value={this.state.dateOfBirth}
              name="dateOfBirth"
              className="DOB"
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
              value={this.state.jobTitle}
              name="jobTitle"
              minlength="3"
              placeholder="Job Title"
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              value={this.state.aboutMe}
              name="notes"
              minlength="3"
              placeholder="Notes"
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
