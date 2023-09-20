import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { dayOfWeekFunc } from "../../utils/dayOfWeekFunc";

const timeBASE_URL: string = "https://worldtimeapi.org/api/";
const ip_apiBase_URL: string = "https://freeipapi.com";

export const fetchTime = createAsyncThunk("fetchTime", async () => {
  try {
    const res: AxiosResponse = await axios.get(`${timeBASE_URL}ip`);
    return {
      time: res.data.datetime,
      abbreviation: res.data.abbreviation,
      timeZone: res.data.timezone,
      dayOfWeek: dayOfWeekFunc(res.data.day_of_week),
      dayOfYear: res.data.day_of_year,
      weekNumber: res.data.week_number,
    };
  } catch (e) {
    console.error((e as Error).message);
    return {
      time: "",
      abbreviation: "",
      timeZone: "",
      dayOfWeek: "",
      dayOfYear: 0,
      weekNumber: "",
    };
  }
});

export const fetchLocation = createAsyncThunk("fetchLocation", async () => {
  try {
    const res: AxiosResponse = await axios.get(`${ip_apiBase_URL}/api/json/`);
    return {
      country: res.data.countryName,
      city: res.data.cityName,
    };
  } catch (e) {
    console.error((e as Error).message);
    return {
      country: "",
      city: "",
    };
  }
});
