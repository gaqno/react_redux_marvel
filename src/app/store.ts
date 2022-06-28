import { configureStore } from "@reduxjs/toolkit";
import { marvelApi } from "../service/marvelApi";

export const store = configureStore({
  reducer: {
    [marvelApi.reducerPath]: marvelApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(marvelApi.middleware);
  }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>