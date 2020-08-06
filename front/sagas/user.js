import { all, fork, put, delay, takeLatest } from "redux-saga/effects";
import axios from "axios";

// 로그인
function logInAPI(data) {
  return axios.post("/api/login", data);
}
function* logIn(action) {
  try {
    yield delay(1000);
    // yield가 await와 같은 역할을 해주므로 여기에서는 call을 사용한다.
    // action을 통해서 type과 data를 받아오며 call, fork를 통해서 loginAPI로 전달된다.
    // const result = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      // 실패 결과가 담겨있는 곳
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

// 로그아웃
function logOutAPI() {
  return axios.post("/api/logout");
}
function* logOut() {
  try {
    // 실제 서버가 현재 없으므로 사용하는 delay
    yield delay(1000);
    // yield가 await와 같은 역할을 해주므로 여기에서는 call을 사용한다.
    // const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      // 실패 결과가 담겨있는 곳
      data: err.response.data,
    });
  }
}
function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
