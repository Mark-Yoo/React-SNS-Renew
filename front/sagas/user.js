import {
  all, fork, put, delay, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  FOLLOW_REQUEST,
  UNFOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  UNFOLLOW_FAILURE,
  UNFOLLOW_SUCCESS,
} from '../reducers/user';

// 로그인
function logInAPI(data) {
  return axios.post('/api/login', data);
}
function* logIn(action) {
  try {
    yield delay(1000);
    // yield가 await와 같은 역할을 해주므로 여기에서는 call을 사용한다.
    // action을 통해서 type과 data를 받아오며 call, fork를 통해서 loginAPI로 전달된다.
    // const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      // 실패 결과가 담겨있는 곳
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

// 로그아웃
function logOutAPI() {
  return axios.post('/api/logout');
}
function* logOut() {
  try {
    // 실제 서버가 현재 없으므로 사용하는 delay
    yield delay(1000);
    // yield가 await와 같은 역할을 해주므로 여기에서는 call을 사용한다.
    // const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      // 실패 결과가 담겨있는 곳
      data: err.response.data,
    });
  }
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function signUpAPI() {
  return axios.post('/api/singUp');
}

function* signUp() {
  try {
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function followAPI() {
  return axios.post('/api/follow');
}

function* follow(action) {
  try {
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI() {
  return axios.post('/api/unfollow');
}
function* unfollow(action) {
  try {
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}
function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchFollow),
    fork(watchUnfollow),
  ]);
}
