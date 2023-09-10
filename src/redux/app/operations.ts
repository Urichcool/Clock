import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const quoteBASE_URL: string = "https://api.quotable.io/";
const timeBASE_URL: string = "http://worldtimeapi.org/api/"

export const fetchQuote = createAsyncThunk(
  "fetchQuote",
  async (): Promise<{ quote: string; author: string }> => {
    try {
      const res = await axios.get(`${quoteBASE_URL}random`);
      return { quote: res.data.content, author: res.data.author };
    } catch  {
      return { quote: "Something went wrong try again", author: "" };
    }
  }
);


export const fetchTime = createAsyncThunk(
  "fetchTime",
  async () => {
    try {
      const res = await axios.get(``)
    } catch (error) {
      
    }
  }
)
