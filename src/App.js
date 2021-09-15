import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

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
      <hr />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/profile/:username" component={Profile}></Route>
    </div>
  );
};

export default App;
