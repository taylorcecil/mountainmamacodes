import React, { Component } from "react";

class App extends React {
  constructor() {
    super();
    this.state = {};
  }

  submitBadge = () => {};

  handleChange = () => {};

  render() {
    return (
      <div>
        <form>
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
            type="text"
            name="email"
            placeholder="Email"
            onClick={this.handleChange}
          />
          <input
            type="text"
            name="birthPlace"
            placeholder="Place of Birth"
            onClick={this.handleChange}
          />
          <input
            type="text"
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
