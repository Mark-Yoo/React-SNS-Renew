export const initialState = {
  isLoggedIn: false,
  userId: null,
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
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        userId: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
      };
    default:
      return state;
  }
};

export default reducer;
