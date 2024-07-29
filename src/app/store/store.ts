import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./stroage";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["favourites"],
};

const persistedReducer = persistReducer(persistConfig, favouriteReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
