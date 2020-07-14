import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// (이전의 상태, 액션) => 다음 상태
const rootReducer = combineReducers({
  // 새롭게 추가된 HYDRATE를 이용한 SSR을 사용하기 위해서 추가된 구문
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log(HYDRATE);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
