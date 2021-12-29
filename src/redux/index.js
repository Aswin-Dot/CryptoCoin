import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import tabReducer from "./Tab/reducer";
import marketReducer from "./Market/reducer";

const reducers = combineReducers({
  tab: tabReducer,
  market: marketReducer
});

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
