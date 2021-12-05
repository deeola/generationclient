import React, { useContext } from "react";
import ProfileContext from "../context/profile/profileContext";
import { NavLink } from "react-router-dom";

const ProfileFilter = () => {
  const profileContext = useContext(ProfileContext);
  const { filtered, loading } = profileContext;

  return (
    <section className="filteredProfiles">
      {filtered !== null && !loading ? (
        <div className='filter-container'>
          {filtered.map((profile, key) => (
            <div className="showcase-details" key={profile._id}>
              <div
                style={{
                  backgroundImage: `url(${profile.imageLink})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="filter-img-container"
              >
                {/* <img alt="" src={profile.imageLink}></img> */}
              </div>
              <div className="showcase-details-container">
                <div className="showcase-names">
                  <p>{profile.firstname}</p>
                  <p>{profile.lastname}</p>
                </div>
                <p className="profilemessage">{profile.profileMessage}</p>
                <div className="dates-container">
                  <p className="dates">
                    Date of Birth : <span>{profile.dateOfBirth}</span>
                  </p>
                  <p className="dates">
                    Date of Death : <span> {profile.dateofDeath}</span>
                  </p>
                </div>
              </div>
              <div className="edit-show-delete">
                <NavLink className="showProfile" to={`/search/${profile._id}`}>
                  Show profile
                </NavLink>
                <NavLink
                  className="deleteProfile"
                  to={`/addNotes/${profile._id}`}
                >
                  ADD NOTES
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default ProfileFilter;
