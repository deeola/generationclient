import React, { useContext, useRef, useEffect } from "react";
import ProfileContext from "../context/profile/profileContext";
import { NavLink } from "react-router-dom";

const ProfileFilter = () => {
  const profileContext = useContext(ProfileContext);
  const { filterProfiles, clearFilter, filtered,loading, getAllProfiles, AllProfiles } = profileContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
    getAllProfiles()
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterProfiles(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="search contacts"
        onChange={onChange}
      />
       <section className="allProfiles">
      {filtered !== null && !loading ? (
        <div>
          {filtered.map((profile, key) => (
            <div className="showcase-details" key={profile._id}>
              <div
                style={{
                  backgroundImage: `url(${profile.imageLink})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="showcase-img-container"
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

                  <p>
                    Date Created :
                    <span>
                      {new Date(profile.date).toISOString().substring(0, 10)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="edit-show-delete">
                {/* <NavLink className="showProfile" >Show profile</NavLink>
                <NavLink   className="editProfile">Edit profile</NavLink> */}
                <NavLink className="showProfile" to={`/search/${profile._id}`}>Show profile</NavLink>
                <NavLink className="deleteProfile"  to={`/addNotes/${profile._id}`}>ADD NOTES</NavLink>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </section>
    </form>
    
  );
};

export default ProfileFilter;
