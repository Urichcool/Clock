import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./app/appSlice";
import { clockReducer } from "./clock/clockSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    clock: clockReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
