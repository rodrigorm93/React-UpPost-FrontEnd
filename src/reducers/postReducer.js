import { types } from "../types/types";

const initialState = {
  posts: [],
  ultimosPost: [],
  active: null,
  ok: null,
  checking: true,
  deletePost: null,
  loadingPostPagination: true,
  loadingPostSearch: false,
  pages: 0,
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

    case types.postFinishLoadingPages:
      return {
        ...state,
        loadingPostPagination: action.payload,
      };

    case types.postFinishLoadingSearch:
      return {
        ...state,
        loadingPostSearch: action.payload,
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

    case types.postsClear:
      return {
        ...state, //clonamos el nuevo estado apra siempre regresar un nuevo estado
        active: null,
        ok: null,
        deletePost: null,
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
    case types.postsLoadUltimosPost:
      return {
        ...state,
        ultimosPost: [...action.payload], //las notas vienen en un action que es un arreglo
      };

    case types.postFinishLoading:
      return {
        ...state,
        checking: false,
      };

    case types.postNumberPage:
      return {
        ...state,
        pages: {
          ...action.payload,
        },
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

    case types.stateDelete:
      return {
        ...state, //clonamos el nuevo estado apra siempre regresar un nuevo estado
        active: null,
        deletePost: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
