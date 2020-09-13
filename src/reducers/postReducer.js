import { types } from "../types/types";

const initialState = {
  posts: [],
  active: null,
  ok: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.postsActive:
      return {
        ...state, //clonamos el nuevo estado apra siempre regresar un nuevo estado
        active: {
          ...action.payload, // sacamos todo lo que nos entrego el action
        },
      };

    case types.postsDesactive:
      return {
        ...state, //clonamos el nuevo estado apra siempre regresar un nuevo estado
        active: null,
        ok: null,
      };

    case types.postUpCorrect:
      return {
        ...state, //clonamos el nuevo estado apra siempre regresar un nuevo estado
        active: null,
        ok: {
          ...action.payload,
        },
      };

    case types.postsLoad:
      return {
        ...state,
        posts: [...action.payload], //las notas vienen en un action que es un arreglo
      };

    default:
      return state;
  }
};
