import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      nameList: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  addName = e => {
    e.preventDefault();
    this.setState(prevState => {
      const { firstName, lastName, nameList } = prevState;
      return {
        firstName: "",
        lastName: "",
        nameList: [...nameList, { firstName, lastName }]
      };
    });
  };

  render() {
    const names = this.state.nameList.map((name, i) => (
      <li key={i}>
        {name.firstName} {name.lastName}
      </li>
    ));
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.addName}>Submit</button>
        </form>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
        <ol>
          <h2> Names: </h2>
          <br />
          {names}
        </ol>
      </div>
    );
  }
}

export default App;
