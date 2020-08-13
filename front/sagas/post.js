import {
  all, fork, takeLatest, delay, put,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../reducers/post';

// 포스트
function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI);
    yield put({
      type: ADD_POST_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

// 코멘트
function addCommentAPI(data) {
  return axios.post(`/api/post/${data.id}/comment`, data);
}

function* addComment(action) {
  try {
    yield delay(1000);
    // const result = yield call(addCommentAPI);
    yield put({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
