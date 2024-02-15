import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";

// const logger = createLogger({
//   collapsed: true,
// });

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware(); // can add custom middleware
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
