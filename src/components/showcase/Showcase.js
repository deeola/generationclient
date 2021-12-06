import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import normalpicture from "../../assets/about2.jpeg";
import ProfileContext from "../context/profile/profileContext";
import Spinner from "../shared/Spinner";
import candle from "../../assets/logos/candle.png";
import imageOne from "../../assets/about1.jpeg";

const Showcase = () => {
  const profileContext = useContext(ProfileContext);
  const { profiles, getProfiles, loading, lightCandles, candles } = profileContext;

  useEffect(() => {
    getProfiles();
    //eslint-disable-next-line
  }, [profiles.candles]);

  

  const { id } = useParams();

  const lightCandlesclient = () => {
  lightCandles(id)
  }

  return (
    <section className="showcaseResult">
      {profiles.length === 0 ? (
        <div className="create-a-profile">
          Please add a profile
          <NavLink className="myLink" to="/create-profile">
            Create a page
          </NavLink>
        </div>
      ) : (
        <div className="showcase-details">
          {profiles.length !== 0 && !loading ? (
            <div>
              {profiles.map((profile, key) => (
                <div key={profile._id}>
                  {id === profile._id ? (
                    <section className="showcased">
                      <div className="showcaseTop">
                        <div className="showcasetop-background"></div>
                        <div className="showcaseProfilePicture">
                          <img src={imageOne} alt="dp"></img>
                        </div>
                        <div className="showcaseDetails">
                          <h2>
                            {profile.firstname} {profile.lastname}
                          </h2>

                          <p className="Birth_death">
                            Born {profile.dateOfBirth}, Died on{" "}
                            {profile.dateofDeath}
                          </p>

                          <p className="showcaseAbout">
                            {profile.profileMessage}
                          </p>
                        </div>
                      </div>
                      <div className="candles-main-container">
                        <div className='candles'>
                        {profile.candles.map((note, key) => (
                          <div key={key} className="candle-container">
                            <img alt="candle" src={candle}></img>
                          </div>
                        ))}
                        </div>
                        <h1>
                          {profile.candles.length}
                        </h1>
                        <p className='lightCandle' onClick={() => lightCandlesclient( id)}>Light a candle</p>
                        
                      </div>
                      <div className="notes-container">
                        <p className="awesomenotes">
                          Here are awesome notes left by the families and well
                          wishers of {profile.firstname}
                        </p>
                        {profile.comments.map((note, key) => (
                          <div className="notes">
                            <p className="mainNote">{note.message}</p>
                            <p className="author">
                              {" "}
                              -written by <span> {note.author}</span>
                            </p>
                          </div>
                        ))}
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
                          {profile.longMessage}
                           
                          
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
                   ''
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </section>
  );
};

export default Showcase;
