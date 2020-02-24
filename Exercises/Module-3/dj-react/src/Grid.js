import React from "react";

class Grid extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "#C3927B"
    };
  }

  //   handleClick = () => {
  //     console.log("hi");
  //     this.setState(prevState => {
  //       if (this.state.color === "#C3927B") {
  //         this.state.color = "#AE4413";
  //       } else {
  //         this.state.color = "#C3927B";
  //       }
  //       return this.state.color;
  //     });
  //   };
  // ******* above method directly mutates state, no bueno
  // ******* below method does not mutate, but sets a new state object with a key of 'color'

  handleClick = () => {
    this.setState(prevState => ({
      color: this.state.color === "#C3927B" ? "#AE4413" : "#C3927B"
    }));
  };

  render() {
    return (
      <div>
        <div
          className="box1"
          style={{ backgroundColor: this.state.color }}
        ></div>
        <br />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Grid;
