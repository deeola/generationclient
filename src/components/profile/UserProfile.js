import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import ProfileContext from "../context/profile/profileContext";
import profilephoto from "../../assets/about1.jpeg";

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const { profiles } = profileContext;
  const { user } = authContext;

  console.log(user);
  return (
    <section className="userprofile">
      {user !== null && (
        <div>
          <div className="userprofileUpper">
          <p>Welcome, {user.username}</p>
          </div>
          
          <div className="username">
           
            <p className="obitlength">
              You have created {profiles.length} obituaries
            </p>
          </div>

          <div className="profile-links">
            <div className="showprofiles">
              <NavLink to="/showcase-all">Show Profiles</NavLink>
            </div>
            <div className="addobit">
              <NavLink className="create-profile-link" to="/create-profile">
                Add Obituary
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserProfile;
