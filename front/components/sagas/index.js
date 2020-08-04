import { all, fork, take, put, call } from "redux-saga/effects";
import axios from "axios";

function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  try {
    const result = yield call(logInAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      // 성공 결과가 담겨있는 곳
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      // 실패 결과가 담겨있는 곳
      data: err.response.data,
    });
  }
}
function* watchLogin() {
  yield take("LOG_IN", logIn);
}

function* watchLogOut() {
  yield take("LOG_OUT");
}

function* watchAddPost() {
  yield take("ADD_POST");
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogOut), fork(watchAddPost)]);
}
