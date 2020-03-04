import React, { Component } from "react";
import Form from "./Form";
import Header from "./Header";
import Badge from "./Badge";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
