import { types } from "../types/types";

export const resetearPagination = (pag) => ({
  type: types.resetPagination,
  payload: pag,
});
