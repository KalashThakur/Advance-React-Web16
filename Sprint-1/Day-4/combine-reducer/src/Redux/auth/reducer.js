import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

const token = loadData("token");

const initState = {
    isAuth: token ? true : false,
    token: token || ""
};

export const authReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      saveData("token", payload)
      return {
      ...state,
      isAuth: true,
      token: payload
    }
  }

    case LOGIN_FAILURE: {
      return {
        ...state,
      isAuth: false,
      token: ""
      }
    }
      
      return {
        ...state,
        
      };

    default:
      return state;
  }
};
