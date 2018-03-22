import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import { paths } from "./Crumb/reducers";
import { currentPath } from "./BreadCrumbs/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const breadcrumbs = combineReducers({
  paths,
  currentPath
});

export default createStore(
  combineReducers({ breadcrumbs }),
  composeEnhancers(applyMiddleware(ReduxThunk))
);
