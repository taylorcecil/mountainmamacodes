import React from "react";
import friendData from "./friendData";
import Friend from "./Friend";

import "./style.css";

function App() {
  const coolFriends = friendData.map(friend => (
    <Friend name={friend.name} age={friend.age} pets={friend.pets} />
  ));

  return <div>{coolFriends}</div>;
}

export default App;
