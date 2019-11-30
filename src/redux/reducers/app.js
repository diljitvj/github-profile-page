import {
  FETCH_PROFILE_DETAILS_SUCCESS,
  FETCH_REPOSITORIES_SUCCESS,
  SET_FILTER,
  CLEAR_FILTER
} from "../actions/names";

const initialState = {
  profile: {
    data: null,
    loading: true
  },
  repositories: {
    data: [],
    loading: true
  },
  filter: {
    searchText: "",
    type: "all",
    language: "all"
  }
};

const app = (state = initialState, action) => {
  switch (action.type) {
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
    case SET_FILTER:
      return {
        ...state,
        filter: {
          ...action.data
        }
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: {
          ...initialState.filter
        }
      };
    default:
      return state;
  }
};

export default app;
