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
    // this.handleChange = this.handleChange.bind(this);
    // this.addName = this.addName.bind(this);
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  addName = e => {
    e.preventDefault();
    console.log("hello");

    const { firstName, lastName } = this.state;
    this.setState({ namesList: [...this.state.names, firstName, lastName] });
    this.state.names.push(this.state.firstName, this.state.lastName);
  };

  // this.setState(prevState => {
  //   return [...prevState.names, (this.state.firstName, this.state.lastName)];
  // });
  //   };

  render() {
    const names = this.state.names.map(name => (
      <li>
        {this.state.firstName} {this.state.lastName}
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
