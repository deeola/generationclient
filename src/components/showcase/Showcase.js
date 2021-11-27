import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import normalpicture from "../../assets/about2.jpeg";
import ProfileContext from "../context/profile/profileContext";
import Spinner from "../shared/Spinner";

const Showcase = () => {
  const profileContext = useContext(ProfileContext);
  const { profiles, getProfiles, loading, uploadedFile, filtered } = profileContext;



  useEffect(() => {
    getProfiles();
    //eslint-disable-next-line
  }, []);

  const { id } = useParams();
  console.log(id);

  profiles.map((profile) => {
    if (profile._id === id) {
      console.log(profile.longMessage);
    } else {
      console.log("nothong");
    }
  });

  console.log(profiles)

  return (
    <div>
      {profiles.length === 0  ? (
        <div>
          Please add a profile
          <NavLink to="/create-profile">Create a page</NavLink>
        </div>
      ) : (
        <div>
          {profiles.length !== 0 && !loading ? (
            <div>
              {profiles.map((profile, key) => (
                <div key={profile._id}>
                  {id === profile._id ? (
                    <section className="showcased">
                      <div className="showcaseTop">
                        <div className="showcaseProfilePicture">
                          <img src={profile.imageLink} alt="dp"></img>
                        </div>
                        <div className="showcaseDetails">
                          <h2>
                            {profile.firstname} {profile.lastname}
                          </h2>
                          <div className="Birth_death">
                            <p>{profile.dateOfBirth}</p>
                            <p>-</p>
                            <p>{profile.dateofDeath}</p>
                          </div>
                          <p className="showcaseAbout">
                            {profile.profileMessage}
                          </p>
                        </div>
                      </div>
                      <div className="showcaseBottom">
                        <div className="showcaseLeft">
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                        </div>
                        <div className="showcaseMiddle">
                          <div className="showcaseimagecontainer showcaseTextContainer">
                            <p>{profile.comments[0].author}</p>
                          </div>
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                        </div>
                        <div className="showcaseRight">
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                          <div className="showcaseimagecontainer">
                            <img src={normalpicture} alt="img1"></img>
                          </div>
                        </div>
                      </div>
                    </section>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </div>
  );
};

export default Showcase;
