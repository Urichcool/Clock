import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const timeBASE_URL: string = "http://worldtimeapi.org/api/";
const ip_apiBase_URL: string = "http://ip-api.com/";

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

export const fetchLocation = createAsyncThunk("fetchLocation", async () => {
  const res = await axios.get(`${ip_apiBase_URL}json`);
  console.log(res)
  return {
    country: res.data.country,
    city: res.data.city
  };
});
