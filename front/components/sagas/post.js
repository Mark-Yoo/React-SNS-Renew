import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import axios from "axios";

// 포스트
function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI);
    yield put({
      type: "ADD_POST_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
