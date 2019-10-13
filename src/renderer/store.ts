import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import { rootReducer, RootState } from "./reducer";

const configureStore = (
  initialState?: RootState
): Store<RootState | undefined> => {
  const middlewares: any[] = [reduxThunk];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState, enhancer);
};

const store = configureStore();

export default store;
