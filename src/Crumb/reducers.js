import {
  CRUMBS_ADD_PATH,
  CRUMBS_DELETED_PATHS_AFTER_CURRENT
} from "./actionTypes";
import { combineReducers } from "redux";

const initPathsState = {
  "/": "Home"
};

export const paths = (state = initPathsState, actions) => {
  switch (actions.type) {
    case CRUMBS_ADD_PATH: {
      return {
        ...state,
        [actions.path]: actions.name
      };
    }
    case CRUMBS_DELETED_PATHS_AFTER_CURRENT: {
      const newState = { ...state };
      const paths = Object.keys(newState);
      const currentIndex = paths.indexOf(actions.path);
      if (currentIndex >= 0) {
        const keysForDeleting = paths.slice(currentIndex + 1);
        keysForDeleting.forEach(it => {
          delete newState[it];
        });
      }
      return newState;
    }
    default:
      return state;
  }
};
