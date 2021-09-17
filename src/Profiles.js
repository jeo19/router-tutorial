import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>Users List</h3>
      <ul>
        <li>
          <Link to="/profiles/masquees">masquees</Link>
        </li>
        <li>
          <Link to="/profiles/pique">pique</Link>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>Select User</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};
export default Profiles;
