import { configureStore, createStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "./stroage";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["favourites"],
};

// export const store = configureStore({
//   reducer: {
//     favourites: favouriteReducer,
//   },
// });

const persistedReducer = persistReducer(persistConfig, favouriteReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
