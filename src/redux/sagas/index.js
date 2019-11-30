import { all, takeEvery } from "redux-saga/effects";

import { FETCH_REPOSITORIES, FETCH_PROFILE_DETAILS } from "../actions/names";

import { fetchProfileDetails, fetchRepositories } from "./app";

export default () =>
  all([
    takeEvery(FETCH_PROFILE_DETAILS, fetchProfileDetails),
    takeEvery(FETCH_REPOSITORIES, fetchRepositories)
  ]);
