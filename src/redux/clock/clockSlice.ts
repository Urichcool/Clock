import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchTime, fetchLocation } from "./operations";

interface clockState {
  isDay: boolean;
  time: {
    time: string;
    abbreviation: string;
    timeZone: string;
    dayOfWeek: string;
    dayOfYear: number;
    weekNumber: number;
  };
  location: {
    country: string;
    city: string;
  };
}

const initialState: clockState = {
  isDay: false,
  time: {
    time: "",
    abbreviation: "",
    timeZone: "",
    dayOfWeek: "",
    dayOfYear: 0,
    weekNumber: 0,
  },
  location: {
    country: "",
    city: "",
  },
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTime.fulfilled, (state, action) => {
        state.time = action.payload;
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.location = action.payload;
      }),
});

export const selectDayNightSwitcher = (state: RootState) => state.clock.isDay;
export const selectTime = (state: RootState) => state.clock.time;
export const selectLocation = (state: RootState) => state.clock.location;


export const clockReducer = clockSlice.reducer;
