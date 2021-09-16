import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  return (
    <div>
      <h1>Intruduce</h1>
      {detail && <p>About page</p>}
    </div>
  );
};
export default About;
