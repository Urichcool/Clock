import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { dayOfWeekFunc } from "../../utils/dayOfWeekFunc";

const timeBASE_URL: string = "https://worldtimeapi.org/api/";
const ip_apiBase_URL: string = "https://freeipapi.com";

export const fetchTime = createAsyncThunk("fetchTime", async ():Promise<{
      time: string,
      abbreviation: string,
      timeZone: string,
      dayOfWeek: string,
      dayOfYear: number,
      weekNumber: number,
    }> => {
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
    console.error((e as AxiosError).message);
    return {
      time: "",
      abbreviation: "",
      timeZone: "",
      dayOfWeek: "",
      dayOfYear: 0,
      weekNumber: 0,
    };
  }
});

export const fetchLocation = createAsyncThunk(
  "fetchLocation",
  async (): Promise<{
    country: string;
    city: string;
  }> => {
    try {
      const res: AxiosResponse = await axios.get(`${ip_apiBase_URL}/api/json/`);
      return {
        country: res.data.countryName,
        city: res.data.cityName,
      };
    } catch (e) {
      console.error((e as AxiosError).message);
      return {
        country: "",
        city: "",
      };
    }
  }
);
