export const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",

  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",

  uiStartLoading: "[UI] Start loading",
  uiFinishLoading: "[UI] Finish loading",

  notesAddNew: "[Posts] New note",
  postsActive: "[Posts] Set active posts", //para saber si la nota esta activa
  postsDesactive: "[Posts] Set desactive posts",
  postsLoad: "[Posts] Load posts", //para cargar todas las notas
  notesUpdate: "[Posts] Update note",
  notesFileUrl: "[Posts] Update image url",
  postDelete: "[Posts] Delete Post",
  notesLogoutCleaning: "[Posts] Logout Cleaning", //para limpiar todo la informacion de notas dle usuario que este en memoria
  postUpCorrect: "[POST] msj de post subido correctamente",

  resetPagination: "[Pagination] indicar reinicio de la paginacion",
};
