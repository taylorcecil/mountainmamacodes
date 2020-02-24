import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [
        {
          firstName: "",
          lastName: ""
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addName = this.addName.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    this.state.nameList.push(name);
  };

  addName = e => {
    this.setState(prevState => {
      return [
        ...prevState.nameList,
        (this.state.firstName, this.state.lastName)
      ];
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.names.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.names.lastName}
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
          {this.state.nameList}
        </ol>
      </div>
    );
  }
}

export default App;
