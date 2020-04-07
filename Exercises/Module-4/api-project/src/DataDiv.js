import React from "react";
import sd from "./sd.jpg";
import CovidData from "./CovidData";

export default function DataDiv() {
  return (
    <>
      <div className="container">
        <div className="dataDiv">{/* <CovidData /> */}</div>
        <div className="sd">
          <img src={sd} style={{ maxWidth: "800px" }} />
        </div>
      </div>
    </>
  );
}
