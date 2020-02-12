import React from "react";
import Spot from "./Spot";
import vacationData from "./vacationData";
import "./style.css";

function App() {
  const vacationSpotDetails = vacationData.map(spot => (
    <Spot place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />
  ));

  return <div>{vacationSpotDetails}</div>;
}

export default App;
