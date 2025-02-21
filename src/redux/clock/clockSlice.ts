import { createSlice } from "@reduxjs/toolkit";
import { fetchTime, fetchLocation } from "./operations";

interface clockState {
  isDay: boolean;
  time: {
    time: string;
    timeZone: string;
    month: string;
    day: number;
    year:number
  };
  location: {
    country: string;
    city: string;
    ipAddress: string;
  };
}

const initialState: clockState = {
  isDay: false,
  time: {
    time: "",
    timeZone: "",
    month: "",
    day: 0,
    year:0,
  },
  location: {
    country: "",
    city: "",
    ipAddress: "",
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

export const clockReducer = clockSlice.reducer;
