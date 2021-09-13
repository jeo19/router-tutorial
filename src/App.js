import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/About" component={About}></Route>
    </div>
  );
};

export default App;
