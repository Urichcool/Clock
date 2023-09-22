import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

const quoteBASE_URL: string = "https://api.quotable.io/";

export const fetchQuote = createAsyncThunk(
  "fetchQuote",
  async (): Promise<{ quote: string; author: string }> => {
    try {
      const res: AxiosResponse = await axios.get(`${quoteBASE_URL}random`);
      return { quote: res.data.content, author: res.data.author };
    } catch(e) {
      console.error((e as AxiosError).message);
      return { quote: "Something went wrong please try again", author: "" };
    }
  }
);
