import React, { useReducer, useEffect, useState } from "react";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";
import axios from "axios";


import {
  ADD_PROFILE,
  DELETE_PROFILE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROFILE,
  FILTER_PROFILES,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_PROFILES,
  GET_ALLPROFILES,
  ADD_NOTES,
  LIGHT_CANDLE
} from "../types";

const ProfileState = (props) => {
  const initialState = {
    profiles: [],
    current: null,
    filtered: null,
    error: null,
    AllProfiles : [],
    notes : [],
   
    
  };

  //candles

  let candles  = []

 

  const [state, dispatch] = useReducer(profileReducer, initialState);

  //GET profiles
  const getProfiles = async () => {
    try {
      const res = await axios.get("/showcase");
     
      dispatch({ type: GET_PROFILES, payload: res.data });
      
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

//get All Profiles

const getAllProfiles = async () => {
  try {
    const res = await axios.get("/search");
   
    dispatch({ type: GET_ALLPROFILES, payload: res.data });
    
  } catch (err) {
    dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
  }
};


useEffect(() => {
  getAllProfiles()
  
  //eslint-disable-next-line
  },[])


  //get profile picture

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  //Add profile

  const addProfile = async (profile) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/showcase", profile, config);
      dispatch({ type: ADD_PROFILE, payload: res.data });

      console.log(res.data);
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //Add Notes

  const addNotes = async (note, id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/comment/${id}`, note, config);
      dispatch({ type: ADD_NOTES, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };


  //  Light Candles
  const lightCandles = async ( id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/candle/${id}`, config);

      if(candles.includes(res.data.user)){
        
        console.log("it's not there")
      } else {
        candles.push(res.data.user)
        console.log("it's   there  now")
      }


      
      

      console.log(candles.length)
      
 
    } catch (err) {
      console.log(err)

    }
  };
  //get notes

  // const getNotes = async (id) => {
  //   try {
  //     const res = await axios.get("/search");
     
  //     dispatch({ type: GET_ALLPROFILES, payload: res.data });
      
  //   } catch (err) {
  //     dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
  //   }
  // }

 


  //delete profile

  const deleteProfile = async (id) => {
    try {
      await axios.delete(`/showcase/${id}`);
      dispatch({ type: DELETE_PROFILE, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //update profile

  const updateProfile = async (profile) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/showcase/${profile._id}`, profile, config);
      dispatch({ type: UPDATE_PROFILE, payload: res.data });

    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };



  //set current profile
  const setCurrent = (profile) => {
    dispatch({ type: SET_CURRENT, payload: profile });
  };

  //clear current profile
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //filter profiles
  const filterProfiles = (users) => {
    dispatch({ type: FILTER_PROFILES, payload: users });
    console.log(users)
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  

  

  return (
    <ProfileContext.Provider
      value={{
        profiles: state.profiles,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        allProfiles : state.AllProfiles,
        notes : state.notes,
        addProfile,
        deleteProfile,
        clearCurrent,
        setCurrent,
        updateProfile,
        filterProfiles,
        clearFilter,
        getProfiles,
        onSubmit,
        uploadedFile,
        message,
        file,
        onChange,
        getAllProfiles,
        addNotes,
        lightCandles,
        candles

      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
