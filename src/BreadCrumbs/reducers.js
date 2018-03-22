import { BREAD_CRUMBS_SET_CURRENT_PATH } from "./actionTypes";

export const currentPath = (state = "/", actions) => {
  switch (actions.type) {
    case BREAD_CRUMBS_SET_CURRENT_PATH:
      return actions.path;
    default:
      return state;
  }
};
