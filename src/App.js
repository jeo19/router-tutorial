import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/About" component={About}></Route>
    </div>
  );
};

export default App;
