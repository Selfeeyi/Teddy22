import axios from "axios";
import { USER_LOGIN, USER_REGISTER,GET_USER } from "./login.type";

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://gezte.com/login", data);
      const result = await response.data;
      console.log("result", result);
      dispatch({ type: USER_LOGIN, payload: result });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://gezte.com/register", data);
      const result = await response.data;
      console.log("result", result);
      dispatch({ type: USER_REGISTER, payload: result });
     
    } catch (error) {
      console.log("error", error);
    }
  };
};


export const getUser = async (dispatch) => {
   
      try {
        const response = await axios.get("https://gezte.com/users");
        const result = await response.data;
        console.log("userdata", result);
        dispatch({ type: GET_USER, payload: result });
      } catch (error) {
        console.log("error", error);
      }
    };
  