import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface AppState {
  isMoreOpen: boolean;
}

// Define the initial state using that type
const initialState: AppState = {
  isMoreOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    moreSwitcher: (state, action) => {
      state.isMoreOpen = action.payload;
    },
  },
});

export const { moreSwitcher } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMoreSwitcher = (state: RootState) => state.app.isMoreOpen;

export const appReducer = appSlice.reducer;
