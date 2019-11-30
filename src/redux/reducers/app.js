import {
  FETCH_PROFILE_DETAILS_SUCCESS,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_PROFILE_DETAILS_ERROR,
  FETCH_PROFILE_DETAILS_LOADING,
  FETCH_REPOSITORIES_ERROR,
  FETCH_REPOSITORIES_LOADING
} from "../actions/names";

const initialState = {
  profile: {
    data: null,
    loading: true
  },
  repositories: {
    data: [],
    loading: true
  }
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_DETAILS_LOADING:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: true
        }
      };
    case FETCH_REPOSITORIES_LOADING:
      return {
        ...state,
        repositories: {
          ...state.repositories,
          loading: true
        }
      };
    case FETCH_PROFILE_DETAILS_SUCCESS: {
      const { data } = action;
      const {
        login,
        avatar_url: avatarUrl,
        bio,
        location,
        company,
        name,
        email
      } = data;

      return {
        ...state,
        profile: {
          data: {
            login,
            avatarUrl,
            bio,
            location,
            company,
            name,
            email
          },
          loading: false
        }
      };
    }
    case FETCH_REPOSITORIES_SUCCESS: {
      const { data } = action;
      const repositories = data.map(
        ({
          id,
          fork,
          forks,
          name,
          license,
          description,
          language,
          homepage,
          updated_at
        }) => ({
          id,
          fork,
          forks,
          name,
          description,
          license: license
            ? {
                ...license
              }
            : null,
          language,
          homepage,
          url: "#",
          updatedAt: updated_at
        })
      );
      return {
        ...state,
        repositories: {
          data: repositories,
          loading: false
        }
      };
    }
    case FETCH_REPOSITORIES_ERROR:
    case FETCH_PROFILE_DETAILS_ERROR:
    default:
      return state;
  }
};

export default app;
