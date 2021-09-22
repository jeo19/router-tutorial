import React from "react";
import { Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import WithRouteSample from "./WithRouteSample";

const Profiles = () => {
  return (
    <div>
      <h3>Users List</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/masquees"
            activeStyle={{ background: "black", color: "white" }}
          >
            masquees
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/pique"
            activeStyle={{ background: "black", color: "white" }}
          >
            pique
          </NavLink>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>Select User</div>} />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouteSample />
    </div>
  );
};
export default Profiles;
