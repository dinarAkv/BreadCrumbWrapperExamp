import { BREAD_CRUMBS_SET_CURRENT_PATH } from "./actionTypes";

export const setCurrentPath = path => dispatch =>
  dispatch({
    type: BREAD_CRUMBS_SET_CURRENT_PATH,
    path
  });
