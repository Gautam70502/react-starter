import {
  AnyAction,
  Middleware,
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import asyncActionCreator from "./middlewares/asyncActionCreator";
import rootReducer from "./reducers";

const logger = createLogger({
  collapsed: true,
});

const emptyMiddleWare: Middleware = function fn1() {
  return function fun2(next: (action: AnyAction) => AnyAction) {
    return function fun3(action: AnyAction) {
      return next(action);
    };
  };
};

let loggerMiddleWare = emptyMiddleWare;

if (global.window) {
  loggerMiddleWare = logger;
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(asyncActionCreator, thunk, loggerMiddleWare)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppHandler = {
  request: (state: RootState) => RootState;
  success: (state: RootState) => RootState;
  failure: (state: RootState) => RootState;
};

export { store };
export default store;
