import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import normalpicture from "../../assets/about2.jpeg";
import ProfileContext from "../context/profile/profileContext";
import Spinner from "../shared/Spinner";

const ShowcaseAll = () => {
  const profileContext = useContext(ProfileContext);
  const { profiles, getProfiles, loading, deleteProfile,clearCurrent, updateProfile, setCurrent } = profileContext;


  //delete

  const onDelete = (id) => {
      deleteProfile(id)
      clearCurrent()
  }
  const onUpdate = (profile, id) => {
    setCurrent(profile)
    updateProfile(id)
   
}

  useEffect(() => {
    getProfiles();
    //eslint-disable-next-line
  }, []);

  console.log(profiles)

  return (
    <section className="allProfiles">
      {profiles.length !== 0 && !loading ? (
        <div>
          {profiles.map((profile, key) => (
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
                <NavLink className="showProfile" to={`/showcase/${profile._id}`}>Show profile</NavLink>
                <NavLink to='/create-profile' onClick={() => onUpdate(profile, profile._id)}  className="editProfile">Edit profile</NavLink>
                <p onClick={() => onDelete(profile._id)} className="deleteProfile">Delete profile</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Please create a profile</div>
      )}
    </section>
  );
};

export default ShowcaseAll;
