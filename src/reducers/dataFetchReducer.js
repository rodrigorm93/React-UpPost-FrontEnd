const initialState = {
  isLoading: true,
  isError: false,
  data: [],
};

export const dataFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLEAR":
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
      };

    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
