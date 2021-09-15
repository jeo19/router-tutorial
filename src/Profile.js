import React from "react";

const profileData = {
  masquees: {
    name: "scott cam",
    description: "Frontend engineer",
  },
  pique: {
    name: "doran kamila",
    description: "Backend engineer",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>Doesn't exist the user</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};
export default Profile;
