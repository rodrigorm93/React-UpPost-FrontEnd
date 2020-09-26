export const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",
  authChekingFinish: "[auth] Finish checking login state",
  authLogout: "[auth] Logout",

  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",

  uiStartLoading: "[UI] Start loading",
  uiFinishLoading: "[UI] Finish loading",

  postsAddNew: "[Posts] New post",
  postsActive: "[Posts] Set active posts", //para saber si la nota esta activa
  postsDesactive: "[Posts] Set desactive posts",
  postsLoad: "[Posts] Load todos los posts", //para cargar todas las notas
  postFinishLoading: "[Posts] Finish loading posts", //para cargar todas las notas
  postNumberPage: "[Posts] Numero de paginas posts",
  postsClear: "[Posts] Limpiar estados",
  postsLoadUltimosPost: "[Posts] Carga los ultimos posts",
  postFinishLoadingPages: "[Posts] Loading de los post por paginacion",
  postFinishLoadingSearch: "[Posts] Loading post Search",

  postUpdated: "[Posts] Update post",
  stateDelete: "[Posts] post eliminado correctamente",

  notesUpdate: "[Posts] Update note",
  notesFileUrl: "[Posts] Update image url",
  postDelete: "[Posts] Delete Post",
  notesLogoutCleaning: "[Posts] Logout Cleaning", //para limpiar todo la informacion de notas dle usuario que este en memoria
  postUpCorrect: "[POST] msj de post subido correctamente",

  resetPagination: "[Pagination] indicar reinicio de la paginacion",
};
