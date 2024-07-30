import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "./stroage";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["favourites"],
};

const persistedReducer = persistReducer(persistConfig, favouriteReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
