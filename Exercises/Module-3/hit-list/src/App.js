import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  // https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json

  // create axios request to get data from API to render

  // store array of targets in state
  // array will start empty and then be set in componentDidUpdate
  // map through array to get React to display in JSX

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json"
      )
      .then(res => {
        const list = res.data;
        this.setState({ list });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <>
        <h1>Hit List</h1>
        <hr />
        <br />
        <ul>
          {this.state.list.map(target => (
            <div className="target">
              <li>{target.name}</li>
              <img src={target.image} />
            </div>
          ))}
        </ul>
      </>
    );
  }
}
