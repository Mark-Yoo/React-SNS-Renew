const initialState = {
  user: {
    isLoggedIn: false,
    userId: null,
    signUpData: {},
    loginDat: {},
  },
  post: {
    mainPosts: [],
  },
};

// async action creator

export const loginAction = (data) => {
  return { type: "LOG_IN", data };
};

export const logoutAction = () => {
  return { type: "LOG_OUT" };
};

// (이전의 상태, 액션) => 다음 상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          userId: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          userId: null,
        },
      };
  }
};

export default rootReducer;
