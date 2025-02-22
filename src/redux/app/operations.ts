import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

const quoteBASE_URL: string = "https://corsproxy.io/https://zenquotes.io/api/";

export const fetchQuote = createAsyncThunk(
  "fetchQuote",
  async (): Promise<{ quote: string; author: string }> => {
    try {
      const res: AxiosResponse = await axios.get(`${quoteBASE_URL}random`);
      return { quote: res.data[0].q, author: res.data[0].a };
    } catch(e) {
      console.error((e as AxiosError).message);
      return { quote: "Something went wrong please try again", author: "" };
    }
  }
);