import { types } from "../types/types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };

    case types.authChekingFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
