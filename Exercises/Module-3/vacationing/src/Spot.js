import React from "react";

function Spot(props) {
  let color;
  if (props.timeToGo === "Spring") {
    color = "#dd7d6a";
  } else if (props.timeToGo === "Summer") {
    color = "#67ddca";
  } else if (props.timeToGo === "Fall") {
    color = "#d5a830";
  } else if (props.timeToGo === "Winter") {
    color = "#46908d";
  }

  const styleObject = {
    backgroundColor: color
  };

  return (
    <div style={styleObject} className="divs">
      <h3>Place: {props.place}</h3>
      <p>Price: {props.price}</p>
      <p>Time to go: {props.timeToGo}</p>
    </div>
  );
}

export default Spot;
