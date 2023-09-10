import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const timeBASE_URL: string = "http://worldtimeapi.org/api/";


export const fetchTime = createAsyncThunk("fetchTime", async () => {
  const res = await axios.get(`${timeBASE_URL}ip`);
  return {
    time: res.data.datetime,
    abbreviation: res.data.abbreviation,
    timeZone: res.data.timezone,
    dayOfWeek: res.data.day_of_week + 1,
    dayOfYear: res.data.day_of_year,
    weekNumber: res.data.week_number,
  };
});