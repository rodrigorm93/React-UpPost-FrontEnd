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

    case types.notesDelete:
      return {
        ...state,
        active: null, //desmarcamos la nota que estamo borrando sandnola d ela snotas activas
        posts: state.posts.filter((post) => post.id !== action.payload), //devolvemos todas las nota menos la que borramos
      };

    default:
      return state;
  }
};
