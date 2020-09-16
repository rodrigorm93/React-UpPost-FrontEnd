import { types } from "../types/types";

const initialState = {
  reset: null,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.resetPagination:
      return {
        reset: action.payload,
      };

    default:
      return state;
  }
};
