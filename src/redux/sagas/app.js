import { call, put } from "redux-saga/effects";

import API from "../../api";

import {
  FETCH_PROFILE_DETAILS_SUCCESS,
  FETCH_PROFILE_DETAILS_LOADING,
  FETCH_PROFILE_DETAILS_ERROR,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_LOADING,
  FETCH_REPOSITORIES_ERROR
} from "../actions/names";

function* fetchProfileDetails() {
  try {
    yield put({
      type: FETCH_PROFILE_DETAILS_LOADING
    });
    const data = yield call(API.getProfileDetails);
    yield put({
      type: FETCH_PROFILE_DETAILS_SUCCESS,
      data
    });
  } catch (err) {
    yield put({ type: FETCH_PROFILE_DETAILS_ERROR });
  }
}
function* fetchRepositories() {
  try {
    yield put({
      type: FETCH_REPOSITORIES_LOADING
    });
    const data = yield call(API.getRepositories);
    yield put({
      type: FETCH_REPOSITORIES_SUCCESS,
      data
    });
  } catch (err) {
    yield put({ type: FETCH_REPOSITORIES_ERROR });
  }
}

export { fetchRepositories, fetchProfileDetails };
