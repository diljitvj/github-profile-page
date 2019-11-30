import {
  SET_FILTER,
  CLEAR_FILTER,
  FETCH_PROFILE_DETAILS,
  FETCH_REPOSITORIES
} from "./names";

const setFilter = data => ({
  type: SET_FILTER,
  data
});

const clearFilter = data => ({
  type: CLEAR_FILTER,
  data
});

const fetchProfileDetails = () => ({
  type: FETCH_PROFILE_DETAILS
});
const fetchRepositories = () => ({
  type: FETCH_REPOSITORIES
});

export { fetchProfileDetails, fetchRepositories, clearFilter, setFilter };
