import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://www.colr.org/json/color/random")
      .then(res => {
        console.log(res.data);
        const backgroundColor = `#${res.data.colors[0].hex}`;
        this.setState({ backgroundColor });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          width: "auto",
          height: "500px"
        }}
      ></div>
    );
  }
}
