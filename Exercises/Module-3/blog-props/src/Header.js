import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <div className="headerContent">
        <Navbar />
        <h1>Clean Blog</h1>
        <h3>A Blog Theme By Start Bootstrap</h3>
      </div>
    </div>
  );
}

export default Header;
