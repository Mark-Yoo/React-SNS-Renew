export const initialState = {
  // 로그인 시도중
  isLoggingIn: false,
  isLoggedIn: false,
  // 로그아웃 시도중
  isLoggingOut: false,
  me: null,
  signUpData: {},
  loginDat: {},
};

// async action creator

export const loginRequestAction = (data) => {
  return { type: "LOG_IN_REQUEST", data };
};

export const logoutRequestAction = () => {
  return { type: "LOG_OUT_REQUEST" };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: "Mark-Yoo" },
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
