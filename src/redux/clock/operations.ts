import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { monthFunc } from "../../utils/monthFunc";

const timeBASE_URL: string =
  "https://timeapi.io/api/time/current/ip?ipAddress=";
const ip_apiBase_URL: string = "https://freeipapi.com";

export const fetchTime = createAsyncThunk(
  "fetchTime",
  async (
    ip: string
  ): Promise<{
    time: string;
    timeZone: string;
    month: string;
    day: number
    year:number
  }> => {
    try {
      const res: AxiosResponse = await axios.get(`${timeBASE_URL}${ip}`);
      return {
        time: res.data.dateTime,
        timeZone: res.data.timeZone,
        month: monthFunc(res.data.month),
        day: res.data.day,
        year: res.data.year
      };
    } catch (e) {
      console.error((e as AxiosError).message);
      return {
        time: "",
        timeZone: "",
        month: "",
        day: 0,
        year: 0
      };
    }
  }
);

export const fetchLocation = createAsyncThunk(
  "fetchLocation",
  async (): Promise<{
    country: string;
    city: string;
    ipAddress: string;
  }> => {
    try {
      const res: AxiosResponse = await axios.get(`${ip_apiBase_URL}/api/json/`);
      return {
        country: res.data.countryName,
        city: res.data.cityName,
        ipAddress: res.data.ipAddress,
      };
    } catch (e) {
      console.error((e as AxiosError).message);
      return {
        country: "",
        city: "",
        ipAddress: "",
      };
    }
  }
);
