import { USER_LOGIN, USER_REGISTER ,GET_USER} from "./login.type";

const initialState = {
  loginUser: [],
  registerUser: [],
  getusers:[]
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        loginUser: action.payload,
      };
    }
    case USER_REGISTER: {
      return {
        ...state,
        registerUser: action.payload,
      };
    }

    case GET_USER: {
        return {
          ...state,
          getusers: action.payload,
        };
      }


    default:
      return state;
  }
}
