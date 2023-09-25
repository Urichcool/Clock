import type { RootState } from "../store";

export const selectMoreSwitcher = (state: RootState) => state.app.isMoreOpen;
export const selectQuoteData = (state: RootState) => state.app.quote;
export const selectIsQuoteLoading = (state: RootState) =>
  state.app.quoteIsLoading;
export const selectIsDay = (state: RootState) => state.app.isDay;
