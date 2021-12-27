import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import tabReducer from "./Tab/reducer"

const reducers = combineReducers({
  tab: tabReducer
});

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
