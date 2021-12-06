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
  CLEAR_PROFILES,
  GET_ALLPROFILES,
  ADD_NOTES,
  LIGHT_CANDLE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALLPROFILES:
      return {
        ...state,
        AllProfiles : action.payload,
        loading : false
      }
    case GET_PROFILES:
      return {
        ...state,
        profiles : action.payload,
        loading : false
      }
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [ action.payload, ...state.profiles],
        loading : false
      };
      case ADD_NOTES:
      return {
        ...state,
        notes: state.notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      ),
        loading : false
      };
      case LIGHT_CANDLE:
      return {
        ...state,
        candles: state.candles.map((candle) =>
        candle._id === action.payload._id ? action.payload : candle
      ),
        loading : false
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.map((profile) =>
          profile._id === action.payload._id ? action.payload : profile
        ),
        loading : false
      };
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile._id !== action.payload
        ),
        loading : false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_PROFILES:
      return {
        ...state,
        filtered: state.AllProfiles.filter((profile) => {
          const regex = new RegExp(`${action.payload.name}`, "gi");
          const regexDate = new RegExp(`${action.payload.date}`, "gi");
          return (
            profile.firstname.match(regex) || profile.lastname.match(regex) && profile.dateOfBirth.match(regexDate)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case  CONTACT_ERROR:
      return{
        ...state,
        error : action.payload
      }

    default:
      return state;
  }
};
