export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginDat: {},
};

// async action creator

export const loginAction = (data) => {
  return { type: "LOG_IN", data };
};

export const logoutAction = () => {
  return { type: "LOG_OUT" };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
