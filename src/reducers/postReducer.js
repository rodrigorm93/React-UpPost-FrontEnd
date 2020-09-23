import { types } from "../types/types";

const initialState = {
  posts: [],
  active: null,
  ok: null,
  checking: true,
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

    case types.postsAddNew:
      return {
        ...state,
        posts: [...state.posts, action.payload],
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

    case types.postFinishLoading:
      return {
        ...state,
        checking: false,
      };

    case types.postUpdated:
      return {
        ...state,
        //vamos actualizar un evento,utilizando el map
        posts: state.post.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
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
