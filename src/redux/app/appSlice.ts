import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchQuote } from "./operations";

interface AppState {
  isMoreOpen: boolean;
  quote: { quote: string; author: string };
  quoteIsLoading: boolean;
  quoteIsError: boolean;
  isDay: boolean;
}

const initialState: AppState = {
  isMoreOpen: false,
  quote: { quote: "", author: "" },
  quoteIsLoading: false,
  quoteIsError: false,
  isDay: false,
};

export const appSlice = createSlice({
  name: "app",

  initialState,
  reducers: {
    moreSwitcher: (state, action) => {
      state.isMoreOpen = action.payload;
    },
    isDaySwitcher: (state, action) => {
      state.isDay = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.quoteIsLoading = true;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.quote = action.payload;
        state.quoteIsLoading = false;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.quoteIsError = true;
        state.quoteIsLoading = false;
      }),
});

export const { moreSwitcher, isDaySwitcher } = appSlice.actions;

export const selectMoreSwitcher = (state: RootState) => state.app.isMoreOpen;
export const selectQuoteData = (state: RootState) => state.app.quote;
export const selectIsQuoteLoading = (state: RootState) =>
  state.app.quoteIsLoading;
export const selectIsDay = (state: RootState) => state.app.isDay;

export const appReducer = appSlice.reducer;