import { FETCH_PROFILE_DETAILS, FETCH_REPOSITORIES } from "./names";

const fetchProfileDetails = () => ({
  type: FETCH_PROFILE_DETAILS
});
const fetchRepositories = () => ({
  type: FETCH_REPOSITORIES
});

export { fetchProfileDetails, fetchRepositories };
