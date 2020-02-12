import React from "react";
import Pets from "./Pets";

function Friend(props) {
  const friendPets = props.pets.map(pets => (
    <Pets name={pets.name} breed={pets.breed} />
  ));

  return (
    <div>
      <div>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
      </div>
      <div>{friendPets}</div>
    </div>
  );
}

export default Friend;
