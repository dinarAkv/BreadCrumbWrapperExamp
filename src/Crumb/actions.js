import {
  CRUMBS_ADD_PATH,
  CRUMBS_DELETED_PATHS_AFTER_CURRENT
} from "./actionTypes";

export const addCrumb = (path, name) => dispatch =>
  dispatch({
    type: CRUMBS_ADD_PATH,
    path,
    name
  });

export const deleteAllPathsAfterThis = () => (dispatch, getState) => {
  const currentPath = getState().breadcrumbs.currentPath;
  dispatch({
    type: CRUMBS_DELETED_PATHS_AFTER_CURRENT,
    path: currentPath
  });
};
