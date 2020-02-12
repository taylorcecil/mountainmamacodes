import React from "react";

function Pets(props) {
  return (
    <div>
      <p>Pet Name: {props.name}</p>
      <p>Pet Breed: {props.breed}</p>
    </div>
  );
}

export default Pets;
