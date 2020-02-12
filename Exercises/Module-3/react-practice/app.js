import React from "react";
import ReactDOM from "react-dom";

ReactDom.render(
  <ul>
    <li>hello</li>
    <li>goodbye</li>
    <li>bonjour</li>
  </ul>,
  document.getElementById("root")
);

// .render() takes 2 parameters: (what we want to render, where we want it to go in the html)

//similar way to write the above
function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));

// ******************************************************** //

import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1> My name is Taylor </h1>
      <p> I like to cook, learn about gardening, and grow herbs </p>
      <ul>
        <p> This year I would like to plant: </p>
        <li>Beets</li>
        <li>Onions</li>
        <li>Kale</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));


$ npx create-react-app . //create new react file? terminal

// componenet is a function, component name is capitalized 
// calling a component in react ---> <ComponentName />
// props are 'arguments' in react, they are objects
// export default *appname
