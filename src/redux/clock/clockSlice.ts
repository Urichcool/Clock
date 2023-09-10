import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchTime } from "./operations";

interface clockState {
  isDay: boolean;
  time: {
    time: string;
    abbreviation: string;
    timeZone: string;
    dayOfWeek: string;
    dayOfYear: string;
    weekNumber: string;
  };
}

const initialState: clockState = {
  isDay: false,
  time: {
    time: "",
    abbreviation: "",
    timeZone: "",
    dayOfWeek: "",
    dayOfYear: "",
    weekNumber: "",
  },
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    dayNightSwither: (state, action) => {
      state.isDay = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchTime.fulfilled, (state, action) => {
      state.time = action.payload;
    }),
});

export const { dayNightSwither } = clockSlice.actions;

export const selectDayNightSwitcher = (state: RootState) => state.clock.isDay;
export const selectTime = (state: RootState) => state.clock.time;

export const clockReducer = clockSlice.reducer;
